import React from "react";
import axios from "axios";

const axiosFetch = async (url, action, options = {}) => {
  let response = null;
  let result = false;
  let error = false;
  try {
    console.log(url, action, options);
    if (action === "post") {
      response = await axios.post(url, {
        ...options,
      });
    }
    if (action === "patch") {
      response = await axios.patch(url, {
        ...options,
      });
    }
    if (action === "delete") {
      response = await axios.delete(url, {
        ...options,
      });
    } else {
      response = await axios.get(url, {
        ...options,
      });
    }
    result = true;
    response = response.data;
    console.log(response);
  } catch (error) {
    error = true;
  }
  return { response, result, error };
};

export default axiosFetch;
