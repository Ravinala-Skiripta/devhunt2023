import axios from "axios";
import { BASE_URL } from "./constant/url";
import { useNavigate } from 'react-router-dom';

interface TokenResponse {
  accessToken: string;
}


let login = async (username: string, password: string) => {
    const response = await axios
          .post(BASE_URL + "/user/login", {
              username,
              password
          });
      if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      return response.data.token;
}

let logout = (): void => {
  removeToken();
};

let register = (username: string, email: string, password: string) => {
  return axios.post(BASE_URL + "/user/register", {
    username,
    email,
    password,
  });
};

let getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") || "null");
};

let isLogged = (): boolean => {
    let token = getToken();
  
    if (!token) {
      return false;
    }
    else {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        console.log(decodedToken) // Decode the token to get the expiration time
        const currentTime = Date.now() / 1000; // Convert current time to seconds
  
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('token');
      return false;
    }
}
  
    return true;
  };

let saveToken = (token: string) => {
  localStorage.setItem("token", token);
};

let removeToken = (): void => {
  localStorage.removeItem("token");
};

let getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const AuthService = {
  login,
  saveToken,
  logout,
  isLogged,
  register,
  getCurrentUser,
};
