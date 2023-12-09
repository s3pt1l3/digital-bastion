import axios from "axios";

export const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api",

    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     "Content-Type": "application/json",
    // },
});
