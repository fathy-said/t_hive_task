import { InsertEmoticon } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changeToken } from "../../RTK/Reducers/LoginReducer";
import { UpdateDataFn } from "../Index";

const drawerWidth = 240;

const Header = (props) => {
  const { window } = props;
  let navigate = useNavigate();
  let location = useLocation();
  let dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { token } = useSelector((state) => state.LoginReducer);
  //handleDrawerToggle
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);
  //handleLogOut
  const handleLogOut = useCallback(() => {
    localStorage.clear();
    dispatch(changeToken({ token: null }));
  }, [dispatch]);
  // change token from localStorage
  useEffect(() => {
    if (localStorage.getItem("AccessTokenTLive")) {
      dispatch(
        changeToken({ token: localStorage.getItem("AccessTokenTLive") })
      );
    } else {
      dispatch(changeToken({ token: null }));
    }
  }, [localStorage.getItem("AccessTokenTLive"), dispatch]);
  // handle link in sidebar
  const drawerResp = useMemo(() => {
    return (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          <InsertEmoticon />
        </Typography>
        <Divider />
        <List>
          {location?.pathname !== "/" && (
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={(e) => {
                  navigate("/");
                }}
              >
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
          )}

          {token == null ? (
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={(e) => {
                  navigate("/login");
                }}
              >
                <ListItemText primary={"Login"} />
              </ListItemButton>
            </ListItem>
          ) : (
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={handleLogOut}
              >
                <ListItemText primary={"Sign Out"} />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    );
  }, [handleDrawerToggle, handleLogOut, token, navigate]);
  const container = useMemo(() => {
    return window !== undefined ? () => window().document.body : undefined;
  }, [window]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <InsertEmoticon />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {/* {navItems.map((item) => {
                if (item == "Sign Out") {
                  return (
                    <Button
                      key={item}
                      sx={{ color: "#fff" }}
                      onClick={(e) => {
                        console.log(e);
                      }}
                    >
                      {item}
                    </Button>
                  );
                } else {
                  return (
                    <Button key={item} sx={{ color: "#fff" }}>
                      {item}
                    </Button>
                  );
                }
              })} */}
              {location?.pathname !== "/" && (
                <Button
                  sx={{ color: "#fff" }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </Button>
              )}

              {token == null ? (
                <Button
                  sx={{ color: "#fff" }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
              ) : (
                <Button sx={{ color: "#fff" }} onClick={handleLogOut}>
                  sign out
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawerResp}
          </Drawer>
        </nav>
      </Box>
      <UpdateDataFn />
    </>
  );
};
Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Header;
