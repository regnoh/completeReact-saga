import axios from "axios";
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/http://rap2api.taobao.org/app/mock/233783";

const isDev = process.env.NODE_ENV === "development"; // webpack
const service = axios.create({
  baseURL: isDev ? BASE_URL : ""
});

service.interceptors.request.use(config => {
  // 每个请求都带上token
  config.data = {
    ...config.data,

    authToken: "12344"
    // localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
  };
  return config;
});

service.interceptors.response.use(res => {
  if (res.data.code === 200) {
    return res.data.data;
  } else {
    // 全局处理错误
    console.error("err", res.data.errMsg);
  }
});

// 文章管理
const ARTICLE_URL = "/api/v1/articles";
const fetchArticles = (offset = 0, limited = 10) => {
  return service.post(ARTICLE_URL, { offset, limited });
};

export default {
  fetchArticles
};
