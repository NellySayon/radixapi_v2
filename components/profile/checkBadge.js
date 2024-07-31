const checkBadge = async (account) => {
   //console.log("checkBadge for account: ", account);

  const params = {
    addresses: [account],
    aggregation_level: "Vault",
    opt_ins: {
      ancestor_identities: false,
      component_royalty_vault_balance: false,
      package_royalty_vault_balance: false,
      non_fungible_include_nfids: true,
      explicit_metadata: ["name", "description"],
    },
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(params),
  };
  try {
    const response = await fetch(
      `${process.env.GATEWAY_API}/state/entity/details`,
      requestOptions
    );
    const isJson = response.headers
      .get("content-type")
      ?.includes("application/json");
    const data = isJson && (await response.json());

    const nfts = data.items[0].non_fungible_resources.items;
    const badges = nfts.filter(
      (nft) => nft.resource_address == process.env.BADGE_RESOURCE_ADDRESS
    );
    //  console.log("badges: ", badges[0].vaults.items[0].items);

    if (badges.length > 0) {
      return badges[0].vaults.items[0].items;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Error during data fetch from gateway: ", error);
  }
};

export default checkBadge;
