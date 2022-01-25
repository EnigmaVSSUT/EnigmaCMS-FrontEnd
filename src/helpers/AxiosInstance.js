import axios from "axios";

export const Axios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
});
/*
export const AuthAxios = (options = {}) => {

    return axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 50000,
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
        }
    });
}
 */
export const UnivAxios = axios.create({
    baseURL: process.env.REACT_APP_UNI_API_URL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
})