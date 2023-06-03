import React from "react";
import axios from "axios";

const axiosFetch = async (url, action, body = {}, headers = {}) => {
  let response = null;
  let result = false;
  let error = false;
  try {
    console.log(body);
    if (action === "post") {
      response = await axios.post(url, body);
    } else if (action === "patch") {
      response = await axios.patch(url, body);
    } else if (action === "delete") {
      response = await axios.delete(url, body);
    } else {
      response = await axios.get(url, body);
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
