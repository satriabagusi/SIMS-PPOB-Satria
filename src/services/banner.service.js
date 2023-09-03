import axios from "axios";

const API_URL = "https://take-home-test-api.nutech-integrasi.app";

const accessToken = localStorage.getItem("token");

export const getBanner = (callback) => {
    axios.get(API_URL + "/banner", {
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