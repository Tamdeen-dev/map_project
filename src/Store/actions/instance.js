import axios from "axios";

//export const domain_name = "62.150.8.199";
export const domain_name = "127.0.0.1:8000";

export const instance = axios.create({
  baseURL: `http://${domain_name}/`,
});
