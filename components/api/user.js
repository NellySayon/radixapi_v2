// ---------------------------------------------------------------------------------------------
// get the user data
// ---------------------------------------------------------------------------------------------
export const getUserData = async (jwt) => {
  const requestOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
    },
  };

  try {
    const result = await fetch(
      process.env.ADMIN_API_LINK + "/v1/user/data",
      requestOptions
    ).then((res) => res.json());

    //console.log("user data: ", result);
    if (result.code === 200) {
      return result.data;
    } else return -1;
  } catch (error) {
    console.log("Error during user/data: ", error);
    return -1;
  }
};

// ---------------------------------------------------------------------------------------------
// save a new deposit from the user
// ---------------------------------------------------------------------------------------------
export const saveUserDeposit = async (deposit, jwt) => {
  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
    },
    body: JSON.stringify(deposit),
  };

  try {
    const result = await fetch(
      process.env.ADMIN_API_LINK + "/v1/user/deposit",
      requestOptions
    ).then((res) => res.json());

    //console.log("user deposit result: ", result);
    return result;
  } catch (error) {
    console.log("Error during user/deposit: ", error);
  }
};
