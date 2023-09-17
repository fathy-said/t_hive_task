import axios from "axios";
axios.defaults.baseURL = "https://e-commerce-3kdo.onrender.com/api";

axios.interceptors.request.use(
  (req) => {
    // Do something before request is sent

    if (!req.url.includes("login") ||!req.url.includes("register")) {
      let token = localStorage.getItem("AccessTokenTLive") || null;
      if (token !== null) {
        req.headers.Authorization = `Bearer ${token}`;
      }
    }
    // console.log(req)
    return req;
  },
  (error) => {
    console.log(error);
    // Do something with request error
    return Promise.reject(error);
  }
);
