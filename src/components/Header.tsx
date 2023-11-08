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
          <NavigationLink to="/" text="Log out" onClick={auth.logout} isChat={true} />
        ) : (
          <div className="buttons-panel">
            <NavigationLink to="/login" text="Log in" isChat={false} />
            <NavigationLink to="/signup" text="Sign up" isChat={false} />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
