const mintBadge = async (rdt, profileName) => {
  // get the account address
  const walletData = rdt.walletApi.getWalletData();
  console.log("walletData: ", walletData);
  if (walletData.accounts.length > 0) {
    const accountAddress = walletData.accounts[0].address;

    // prepare the transaction manifest to mint a new badge
    let manifest = `      
      CALL_METHOD
          Address("${process.env.COMPONENT_ADDRESS}")
          "get_api_badge"
          "${profileName}"
      ;
      CALL_METHOD
          Address("${accountAddress}")
          "deposit_batch"
          Expression("ENTIRE_WORKTOP");
    `;
    
    // Send manifest to wallet extension for signing
    try {
      const result = await rdt.walletApi.sendTransaction({
        transactionManifest: manifest,
        version: 1,
        message: "Your badge for RadixAPI",
      });
      //console.log("WalletSDK Result: ", result);

      if (result.value) {        
        // fetch the transaction status from the Gateway API
        const transactionStatus = await rdt.gatewayApi.transaction.getStatus(
          result.value.transactionIntentHash
        );
        //console.log("TransactionApi transaction/status:", transactionStatus);

        if (transactionStatus.status === "CommittedSuccess") {
          return 1;
        } else {
          return -1;
        }
      }
      else if (result.error.error === "rejectedByUser") return 0;
      else return -1;
      
    } catch (error) {
      console.log("Error during wallet transaction: ", error);
      return -1;
    }
  }
  else {
    console.log("No account found in wallet.");
    return -1;
  }
};

export default mintBadge;
