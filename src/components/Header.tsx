import { AppBar, Toolbar } from "@mui/material";
import Logo from "./common/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./common/NavigationLink";

const Header = () => {
  const auth = useAuth();

  return (
    <AppBar sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>
      <Toolbar className="header-toolbar">
        <Logo />

        {auth?.isLoggedIn ? (
          <div className="buttons-panel">
            {/* <NavigationLink
              bg="rgb(255 196 49)"
              to="/chat"
              text="Chat"
              textColor="black"
            /> */}
            <NavigationLink
              bg="#51538f"
              to="/"
              text="Log out"
              textColor="white"
              onClick={auth.logout}
            />
          </div>
        ) : (
          <div className="buttons-panel">
            <NavigationLink bg="#51538f" to="/login" text="Log in" textColor="white" />
            <NavigationLink bg="#51538f" to="/signup" text="Sign up" textColor="white" />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
