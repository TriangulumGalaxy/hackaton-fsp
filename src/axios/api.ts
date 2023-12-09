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
    // 6457416888:AAFwjFOI2hpppmtE2nG_fxAwm6uQsEGf7RA
    const url = `https://api.telegram.org/bot6457416888:AAFwjFOI2hpppmtE2nG_fxAwm6uQsEGf7RA/sendMessage`;
    await axios.post(url, {
        chat_id: "1220563746",
        text,
    });
}
// export function GetPost() {}
