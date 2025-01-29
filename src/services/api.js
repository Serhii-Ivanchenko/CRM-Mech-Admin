import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
});

export const setAuthHeader = (api_key) => {
  axiosInstance.defaults.headers.common["X-Api-Key"] = `${api_key}`;
};

export const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common["X-Api-Key"] = "";
};
