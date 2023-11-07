import { Box, Button } from "@mui/material";
import TypingAnimation from "../components/typer/TypingAnimation";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box className="home-container">
      <TypingAnimation />
      <Button
        variant="contained"
        sx={{ width: "70%", fontSize: "20px" }}
        onClick={() => navigate("/chat")}
      >
        Go to Chat
      </Button>
    </Box>
  );
};
export default Home;
