// ---------------------------------------------------------------------------------------------
// get a challenge for further account verification
// ---------------------------------------------------------------------------------------------
export const getChallenge = async () => {
  // set some default challenge
  let challenge = "4ccb0555d6b4faad0d7f5ed40bf4e4f0665c8ba35929c638e232e09775d0fa0e";
  const params = {
    applicationName: "RadixAPI",
    dAppDefinitionAddress: process.env.DAPP_ACCOUNT,
    networkId: Number(process.env.NETWORK_ID),
    expectedOrigin: process.env.ROLA_ORIGIN,
    expires: 300, // 5 minutes
  };

  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  };

  try {
    const result = await fetch(
      process.env.ADMIN_API_LINK + "/v1/challenge/create",
      requestOptions
    ).then((res) => res.json());

    // console.log("challenge result: ", result);
    challenge = result.challenge;
  } catch (error) {
    console.log("Error during challenge/get: ", error);
  }
  // console.log("challenge: ", challenge);
  return new Promise((resolve, reject) => {
    resolve(challenge);
  });
};

// ---------------------------------------------------------------------------------------------
// verify the signed ROLA challenge and receive a JWT token for further authentication
// ---------------------------------------------------------------------------------------------
export const getJWT = async (accountProof) => {
  const params = {
    type: accountProof.type,
    challenge: accountProof.challenge,
    proof: {
      publicKey: accountProof.proof.publicKey,
      signature: accountProof.proof.signature,
      curve: accountProof.proof.curve,
    },
    address: accountProof.address,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  };

  //console.log("jwt params: ", params);

  try {
    const result = await fetch(
      process.env.ADMIN_API_LINK + "/v1/jwt/create",
      requestOptions
    ).then((res) => res.json());

    //console.log("jwt result: ", result);
    if (result.code === 200) {
      return {
        badge: result.login_name,
        jwt: result.access_token,
      };
    } else
      return {
        badge: "",
        jwt: "",
      };
  } catch (error) {
    console.log("Error during jwt/create: ", error);
  }
};

// ---------------------------------------------------------------------------------------------
// returns a new JWT access token in exchange for an existing one
// ---------------------------------------------------------------------------------------------
export const refreshJWT = async (jwt) => {
  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
    },    
  };

  try {
    const result = await fetch(
      process.env.ADMIN_API_LINK + "/v1/jwt/refresh",
      requestOptions
    ).then((res) => res.json());

    if (result.code === 200) {
      return result.access_token;
    } else return "";
  } catch (error) {
    console.log("Error during jwt/refresh: ", error);
  }
};
