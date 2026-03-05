import axios from "axios";
const URL_API = "http://localhost:5555/api/prompt"

export const makeRequest = async (payload) => {
  const response = await axios.post(URL_API, payload);
  return response.data;
};