import { Box, Typography, Button } from "@mui/material";
import CustomInput from "../components/common/CustomInput";
import { IoIosLogIn } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TypingAnimation from "../components/typer/TypingAnimation";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      toast.loading("Signing in...", { id: "login" });
      await auth?.login(email, password);
      toast.success("Login success", { id: "login" });
    } catch (error) {
      console.error(error);
      toast.error("Login failed", { id: "login" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth]);

  return (
    <Box className="login-container">
      <Box>
        <Typography className="greeting-text">Ask me about</Typography>
        <br />
        <TypingAnimation />
      </Box>

      <form onSubmit={handleSubmit} className="login-form">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" textAlign="center" fontWeight={600}>
            Login
          </Typography>
          <CustomInput type="email" name="email" label="Email" width="400px" />
          <CustomInput type="password" name="password" label="Password" width="400px" />
          <Button type="submit" endIcon={<IoIosLogIn />} className="submit-button">
            Log in
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default Login;
