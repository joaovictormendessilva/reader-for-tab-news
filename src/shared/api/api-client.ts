import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://www.tabnews.com.br/api/v1",
  timeout: 10_000,
});
