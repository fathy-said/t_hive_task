import { Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { MessageAlert, openAlert } from "../../RTK/Reducers/MessageReducer";
import { RegisterThunk } from "../../RTK/Thunks/RegisterThunk";
import {
  ErrorMessageTarget,
  GlobalInputBox,
  GlobalInputPassBox,
} from "../Index";
import "./RegisterBox.css";

// =====validation===========
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  pass: Yup.string().required("Required"),
});
const RegisterBox = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      pass: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      dispatch(RegisterThunk(values))
        .unwrap()
        .then((data) => {
          // console.log(data);
          navigate("/login");
          setErrorMessage(null);
          dispatch(openAlert());
          dispatch(MessageAlert("The Create Account Was successfully"));
        })
        .catch((error) => {
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
  return (
    <>
      <div className="register-box">
        <div className="container-box container ">
          <div className="content">
            {/* <h2>
              Register
            </h2> */}
            <h6>Create Account</h6>
            <Typography
              component={"form"}
              className={"box"}
              onSubmit={formik.handleSubmit}
            >
              <GlobalInputBox formik={formik} name={"name"} />
              <GlobalInputBox formik={formik} name={"email"} />

              <GlobalInputPassBox formik={formik} />

              <Button className="submit" variant="contained" type="submit">
                Create
              </Button>
              <ErrorMessageTarget errorMessage={errorMessage} />
            </Typography>
            <div
              className=" cursor-pointer w-fit font-medium capitalize text-[18px] mx-auto my-[15px] trn text-primaryBg hover:text-primaryBg_100"
              onClick={() => {
                navigate("/login");
              }}
            >
              I have account
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterBox;
