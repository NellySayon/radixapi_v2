// ---------------------------------------------------------------------------------------------
// save information for listing data 
// ---------------------------------------------------------------------------------------------
export const saveListingData= async (data, jwt) => {
    const requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
      body: JSON.stringify(data),
    };
  
    try {
      const result = await fetch(
        process.env.ADMIN_API_LINK + "/v1/user/listing",
        requestOptions
      ).then((res) => res.json());
  
      //console.log("user deposit result: ", result);
      return result;
    } catch (error) {
      console.log("Error during user/listing: ", error);
    }
  };