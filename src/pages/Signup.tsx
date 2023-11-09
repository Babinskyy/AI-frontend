import { Box, Typography, Button } from "@mui/material";
import CustomInput from "../components/common/CustomInput";
import { IoIosLogIn } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TypingAnimation from "../components/typer/TypingAnimation";

const Signup = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      toast.loading("Signing up...", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Sign up success!", { id: "signup" });
    } catch (error) {
      console.error(error);
      toast.error("Sign up failed.", { id: "signup" });
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
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography variant="h4" textAlign="center" fontWeight={600}>
            Signup
          </Typography>
          <CustomInput type="text" name="name" label="Name" width="400px" />
          <CustomInput type="email" name="email" label="Email" width="400px" />
          <CustomInput type="password" name="password" label="Password" width="400px" />
          <Button type="submit" endIcon={<IoIosLogIn />} className="submit-button">
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default Signup;
