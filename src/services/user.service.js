import axios from "axios";

const API_URL = "https://take-home-test-api.nutech-integrasi.app";

export const topUpBalance = (token, ammount, callback) => {
  return axios
    .post(
      API_URL + "/topup",
      { top_up_amount: ammount },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err.response.data);
    });
};

export const getUserBalance = (token, callback) => {
  return axios
    .get(API_URL + "/balance", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      callback(true, res.data.data);
    })
    .catch((err) => {
      callback(false, err.response.data);
    });
};

export const getHistoryTransaction = (token, offset, limit, callback) => {
  return axios
    .get(API_URL + "/transaction/history?offset=" + offset + "&limit=" + limit, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      callback(true, res.data.data);
    })
    .catch((err) => {
      callback(false, err.response.data);
    });
}

export const updateProfile = (token, data, callback) => {
  return axios
    .put(API_URL + "/profile/update", data, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      callback(true, res.data.data);
    })
    .catch((err) => {
      callback(false, err.response.data);
    });
}

export const updateProfilePhoto = (token, data, callback) => {
  return axios
    .put(API_URL + "/profile/image", data, {
      headers: {
        Accept: "application/json",
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      callback(true, res.data.data);
    })
    .catch((err) => {
      callback(false, err.response.data);
    });
}