import axios from "axios";
const url = "https://www.course-api.com";
export const customFetch = axios.create({
  baseURL: url,
});
