import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Update this if your backend is running on a different port

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
