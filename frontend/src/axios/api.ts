import axios from "axios";
import { client } from ".";

export async function GetPosts(page: number) {
    const response = await client.get(`/articles/${page}/`);
    return response.data;
}

export async function login(username: string, password: string) {
    const response = await client.post("/login/", { username, password });
    return response.data;
}

export async function register(
    username: string,
    email: string,
    password: string
) {
    const response = await client.post("/register/", {
        username,
        email,
        password,
    });
    // console.log(response.data);
    return [response.status, response.data];
}

export async function sendMessage(text: string) {
    const url = `https://api.telegram.org/bot/sendMessage`;
    await axios.post(url, {
        chat_id: "",
        text,
    });
}
// export function GetPost() {}
