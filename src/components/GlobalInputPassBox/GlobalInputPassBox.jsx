import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import "./GlobalInputPassBox.css";
const GlobalInputPassBox = ({ formik, name }) => {
  // console.log(formik?.values[name]);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = useCallback(() => {
    setShowPassword((show) => !show);
  }, []);
  const handleMouseDownPassword = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <>
      <Typography
        variant="body1"
        component={"div"}
        className="content-box global-input-pass"
        sx={{ width: "100%" }}
      >
        <h5>Password</h5>
        <FormControl variant="standard" fullWidth className="input-box">
          <Input
            id="standard-adornment-password"
            className="input-pass"
            type={showPassword ? "text" : "password"}
            name="pass"
            onChange={formik?.handleChange}
            value={formik?.values?.pass}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  disableRipple
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {formik?.errors?.pass && formik?.touched?.pass ? (
          <span
            style={{
              width: "100%",
              color: "red",
              fontSize: "15px",
              marginTop: "5px",
            }}
          >
            {formik?.errors?.pass}
          </span>
        ) : null}
      </Typography>
    </>
  );
};

export default GlobalInputPassBox;
