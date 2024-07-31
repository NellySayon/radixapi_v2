const takePayment = async (rdt, xrd_amount) => {
  // get the account address
  const walletData = rdt.walletApi.getWalletData();
  // console.log("walletData: ", walletData);
  if (walletData.accounts.length > 0) {
    const accountAddress = walletData.accounts[0].address;

    let manifest = `
      CALL_METHOD
          Address("${accountAddress}")
          "withdraw"
          Address("${process.env.XRD_ADDRESS}")
          Decimal("${xrd_amount}")
      ;
      TAKE_FROM_WORKTOP
          Address("${process.env.XRD_ADDRESS}")
          Decimal("${xrd_amount}")
          Bucket("bucket1")
      ;
      CALL_METHOD
          Address("${process.env.DAPP_ACCOUNT}")
          "try_deposit_or_abort"
          Bucket("bucket1")
          Enum<0u8>()
      ;
    `;
    // console.log("Manifest: ", manifest);
    try {
      // Send manifest to wallet extension for signing
      const result = await rdt.walletApi.sendTransaction({
        transactionManifest: manifest,
        version: 1,
        message: "Your purchase on RadixAPI",
      });

      if (result.value) {
        // fetch the transaction status from the Gateway API
        const transactionStatus = await rdt.gatewayApi.transaction.getStatus(
          result.value.transactionIntentHash
        );
        //console.log("TransactionApi transaction/status:", transactionStatus);

        if (transactionStatus.status === "CommittedSuccess") {
          return {
            intentHash: result.value.transactionIntentHash,
            ledgerState: transactionStatus.ledger_state
          };
        } else {
          return null;
        }
      } else if (result.error.error === "rejectedByUser") return 0;
      else return -1;
    } catch (error) {
      console.log("Error during wallet transaction: ", error);
      return -1;
    }
  }
};

export default takePayment;
