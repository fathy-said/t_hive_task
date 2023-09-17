import { Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { MessageAlert, openAlert } from "../../RTK/Reducers/MessageReducer";
import { LoginThunk } from "../../RTK/Thunks/LoginThunk";
import {
  ErrorMessageTarget,
  GlobalInputBox,
  GlobalInputPassBox,
} from "../Index";
import "./LoginBox.css";

// =====validation===========
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  pass: Yup.string().required("Required"),
});
const LoginBox = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
    },
    onSubmit: (values) => {
      dispatch(LoginThunk(values))
        .unwrap()
        .then((data) => {
          // console.log(data);
          dispatch(openAlert());
          dispatch(MessageAlert("The Login Was successfully"));

          navigate("/");
          setErrorMessage(null);
        })
        .catch((error) => {
          // console.log(error);
          setErrorMessage(error?.data);
          // console.log(error);
          // handle error here
        });
    },
    validationSchema: SignupSchema,
  });

  useEffect(() => {
    if (formik.values) {
      setErrorMessage(null);
    }
  }, [formik.values]);
  // chick token
  useEffect(() => {
    if (localStorage.AccessTokenTLive) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="login-box">
        <div className="container-box container">
          <div className="content">
            <h2>Sign In</h2>
            <h6>Sign in to stay connected.</h6>
            <Typography
              component={"form"}
              className={"box"}
              onSubmit={formik.handleSubmit}
            >
              <GlobalInputBox formik={formik} name={"email"} />
              <GlobalInputPassBox formik={formik} />

              <Button className="submit" variant="contained" type="submit">
                Sign In
              </Button>

              <ErrorMessageTarget errorMessage={errorMessage} />
            </Typography>
            <div
              className=" cursor-pointer w-fit font-medium capitalize text-[18px] mx-auto my-[15px] trn text-primaryBg hover:text-primaryBg_100"
              onClick={() => {
                navigate("/register");
              }}
            >
              create account
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBox;
