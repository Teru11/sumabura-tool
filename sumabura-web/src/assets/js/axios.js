import axios from 'axios';

/** バックエンドURL */
const baseUrl = "http://localhost:3000/sumabura";

/** GET送信（しゅ徳処理）  */
export async function get(url) {
  try {
    const response = await axios.get(`${baseUrl}/${url}`);
    return response.data;
  } catch (error) {
    console.error(`[GET] ${url} でエラー`, error)
    return null;
  }
}

/** POST送信（更新処理） */
export async function post(url, jsonData) {
  try {
    const response = await axios.post(`${baseUrl}/${url}`, jsonData);
    return response.data;
  } catch (error) {
    console.error(`[POST] ${url} でエラー`, error)
    return null;
  }
}

