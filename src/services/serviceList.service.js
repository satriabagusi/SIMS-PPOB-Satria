import axios from "axios";

const API_URL = "https://take-home-test-api.nutech-integrasi.app";

const accessToken = localStorage.getItem("token");

export const getListServices = (callback) => {
    axios.get(API_URL + "/services", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then((res) => {
        callback(res.data);
    }).catch((err) => {
        console.log(err)
    });
}

export const payServices = (data, callback) => {
    axios.post(API_URL + "/transaction", {
        "service_code": data
    }, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then((res) => {
        callback(true, res.data);
    }).catch((err) => {
        // console.log(false, err)
        callback(false, err.response.data);
    });
}