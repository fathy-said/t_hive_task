import React from "react";
import { CardBox } from "../../components/Index";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Mood } from "@mui/icons-material";

const HomePage = (props) => {
  let { token } = useSelector((state) => state.LoginReducer);

  return (
    <div className=" w-fit h-full flex container  pb-[60px]">
      {token !== null ? (
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
            return (
              <Grid item key={el} xs={12} sm={6} md={4} lg={4} xl={3}>
                <CardBox />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div className=" w-full gap-[10px] h-full text-center flex-col font-bold text-[22px] capitalize text-primaryBg_100 min-h-[calc(100vh-60px-110px)] flex justify-center items-center">
          <Mood className="!text-[95px]" />

          <h3>to show content pleas login now</h3>
        </div>
      )}
    </div>
  );
};

export default HomePage;
