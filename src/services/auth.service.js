import axios from "axios";
import { setUser } from "../redux/slices/authSlice";

const API_URL = "https://take-home-test-api.nutech-integrasi.app";

export const login = (data, callback) => {
  return axios
    .post(API_URL + "/login", data)
    .then((res) => {
      //   console.log(res.data.data.token);
      const data = {
        token: res.data.data.token,
      };
      callback(true, data);
    })
    .catch((err) => {
      // console.log(false, err);
      callback(false, err.response.data);
    });
};

export const getProfile = (token, callback) => {
  return axios
    .get(API_URL + "/profile", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      callback(true, res.data.data);
      setUser(res.data.data);
    })
    .catch((err) => {
      callback(false, err.response.data);
    });
};

export const register = (data, callback) => {
  return axios
    .post(API_URL + "/registration", data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err.response.data);
    });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.clear();
  window.location.href = "/login";
};
