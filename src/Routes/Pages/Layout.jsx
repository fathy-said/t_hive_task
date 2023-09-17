import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../components/Index";
import axios from "axios";
const drawerWidth = 280;
const HTTP_UNAUTHORIZED = 401,
  HTTP_FORBIDDEN = 403,
  HTTP_NOT_FOUND = 404;
const Layout = () => {
  let navigate = useNavigate();

  //   useEffect(() => {
  //     axios.interceptors.response.use(null, (error) => {
  //         // console.log(error.response.status)
  //         if (error.response.status == HTTP_UNAUTHORIZED) {
  //             navigate("/login");
  //             localStorage.clear();
  //         } else if (error.response.status == HTTP_NOT_FOUND) {
  //             navigate("page404");
  //         } else if (error.response.status == HTTP_FORBIDDEN) {
  //             navigate("/login");
  //             localStorage.clear();
  //         }
  //         return Promise.reject(error);
  //     });
  // }, [navigate]);
  return (
    <div className=" w-full h-full">
      <Header />
      <div className=" w-full h-full mt-[110px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
