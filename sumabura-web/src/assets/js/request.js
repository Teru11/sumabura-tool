import axios from 'axios';

/** バックエンドURL */
const backend_url = "http://localhost:3000/sumabura/";

/** 画面初期表示リクエストデータ取得 */ 
export async function InitDisplaytRequestData(path) {
  try {
    const response = await axios.get(backend_url + `${path}`);
    // 画面のデベロッパーツールの[console]のArrayに出力
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('リクエスト[GET]例外エラー:', error);
    return null;
  }
}

/** リクエスト・データ取得 */ 
export async function requestPostSearchData(url, requestData) {
  try {
    const response = await axios.post(backend_url + `${url}`, requestData);
    // 画面のデベロッパーツールの[console]のArrayに出力
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('リクエスト[POST]例外エラー:', error);
    return null;
  }
}