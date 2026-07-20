import api from "./api";

export async function signup(data) {
  const res = await api.post("/auth/signup", data);
  return res.data.data; // ApiResponse: { message, This is the necessary ->data, timestamp }
}

export async function login(data) {
  const res = await api.post("/auth/login", data);
  return res.data.data; // Data.data to get the token from the response data format by axios
}