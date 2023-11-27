import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src="artificial-intelligence.png" alt="guitar-logo" className="logo-image" />

      <Typography className="logo-text">
        <span>AI Assistant</span>
      </Typography>
    </div>
  );
};
export default Logo;
