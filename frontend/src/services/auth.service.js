import axios from "axios";

const API_URL = "http://localhost:3000/api/";

const authService = {
  signup: (username, email, password, roles = ["user"]) => {
    return axios.post(API_URL + "auth/signup", {
      username,
      email,
      password,
      roles,
    });
  },

  login: async (username, password) => {
    const response = await axios.post(API_URL + "auth/signin", {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("user");
  },

  getCurrentUser: () => {
    try {
      const userStr = localStorage.getItem("user");
      if (userStr) return JSON.parse(userStr);
      return null;
    } catch {
      localStorage.removeItem("user");
      return null;
    }
  },
};

export default authService;
