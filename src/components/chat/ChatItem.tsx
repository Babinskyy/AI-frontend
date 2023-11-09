import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const extractCodeFromString = (message: string) => {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
};

const isCodeBlock = (str: string) => {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }

  return false;
};
const languageCheck = (str: string) => {
  return str.split("\n")[0];
};
const removeLanguageFromBlock = (str: string, word: string) => {
  return str.replace(word, "");
};

const ChatItem = ({ content, role }: { content: string; role: "user" | "assistant" }) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();

  return role === "assistant" ? (
    <Box className="chat-item">
      <div style={{ height: "98%" }}>
        <Avatar sx={{ ml: "0", bgcolor: "rgb(40,40,40)" }}>
          <img src="artificial-intelligence.png" alt="ai-avatar" width={"30px"} />
        </Avatar>
      </div>

      <Box>
        {!messageBlocks && <Typography fontSize={"20px"}>{content}</Typography>}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter
                style={atomDark}
                language={languageCheck(block)}
                wrapLongLines={true}
              >
                {removeLanguageFromBlock(block, languageCheck(block)).trim()}
              </SyntaxHighlighter>
            ) : (
              <Typography fontSize={"20px"}>{block}</Typography>
            )
          )}
      </Box>
    </Box>
  ) : (
    <Box sx={{ bgcolor: "#414141" }} className="chat-item">
      <div style={{ height: "92%" }}>
        <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
          {auth?.user?.name[0]}
        </Avatar>
      </div>
      <Box>
        <Typography fontSize={"20px"}>{content}</Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
