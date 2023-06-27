import axios from "axios";
//import jwtDecode from "jwt-decode";
//import { useRouter } from "vue-router";
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
/*if (localStorage.getItem("jwt")) {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("jwt");
}

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle JWT expiration or any other error
    if (error.response && error.response.status === 401) {
      // Handle JWT expiration here (e.g., redirect to login page)
      console.log("JWT expired or invalid");

      delete config.headers["Authorization"];
      router.push("/login");
    }

    return Promise.reject(error);
  }
);*/

export default axios;
