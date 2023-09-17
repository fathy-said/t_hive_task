import { TextField, Typography } from "@mui/material";
import React from "react";
import "./GlobalInputBox.css";
const GlobalInputBox = ({ formik, name }) => {
  // console.log(formik?.values[name]);

  return (
    <>
      <Typography
        variant="body1"
        component={"div"}
        className="global-input-box"
        sx={{ width: "100%" }}
      >
        <h5>{name}</h5>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          className="input-box"
          variant="standard"
          name={name}
          onChange={formik?.handleChange}
          value={formik?.values[name]}
        />
        {formik?.errors[name] && formik?.touched[name] ? (
          <span
            style={{
              width: "100%",
              color: "red",
              fontSize: "15px",
              marginTop: "5px",
            }}
          >
            {formik?.errors[name]}
          </span>
        ) : null}
      </Typography>
    </>
  );
};

export default GlobalInputBox;
