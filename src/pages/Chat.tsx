import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  deleteUserChats,
  getUserChats,
  sendChatRequest,
} from "../helpers/apiCommunicator";
import toast from "react-hot-toast";
import LoadingTyping from "../components/typer/LoadingTyping";
import ExampleQuestions from "../components/chat/ExampleQuestions";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [answerLoading, setAnswerLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (inputRef.current?.value) {
      setAnswerLoading(true);
      const content = inputRef.current?.value as string;

      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
      const newMessage: Message = { role: "user", content };
      setChatMessages((prev) => [...prev, newMessage]);
      const chatData = await sendChatRequest(content);
      setChatMessages([...chatData.chats]);
      setAnswerLoading(false);
    } else {
      toast.error("Input is empty!");
    }
  };

  const handleDeleteChats = async () => {
    if (confirm("Are you sure?")) {
      try {
        toast.loading("Deleting Chats...", { id: "deleteChats" });
        await deleteUserChats();
        setChatMessages([]);
        toast.success("Chats deleted successfully!", { id: "deleteChats" });
      } catch (error) {
        console.log(error);
        toast.success("Chats deleting failed.", { id: "deleteChats" });
      }
    }
  };

  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Chats loading...", { id: "loadchats" });
      getUserChats()
        .then((data) => {
          setChatMessages([...data.chats]);
          toast.success("Chats loaded successfully!", { id: "loadchats" });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Chats loading failed.", { id: "loadchats" });
        });
    }
  }, [auth]);

  useEffect(() => {
    if (!auth?.user) {
      return navigate("/login");
    }
  }, []);

  return (
    <Box className="chat-container">
      <Box className="messages-container">
        {chatMessages.length ? (
          <></>
        ) : (
          <ExampleQuestions handleSubmit={handleSubmit} inputRef={inputRef} />
        )}

        {chatMessages.map((chat, index) => {
          return <ChatItem content={chat.content} role={chat.role} key={index} />;
        })}
        {answerLoading && (
          <Box
            sx={{
              display: "flex",
              p: 2,
              bgcolor: "rgb(40,40,40)",
              my: 2,
              gap: 2,
            }}
          >
            <Avatar sx={{ ml: "0", bgcolor: "rgb(40,40,40)" }}>
              <img src="artificial-intelligence.png" alt="ai-avatar" width={"30px"} />
            </Avatar>
            <Box>
              <Typography>
                <LoadingTyping />
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
      <div
        style={{
          width: "96%",
          borderRadius: 8,
          backgroundColor: "#414141",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ ml: "20px", bgcolor: "black", color: "white" }}>
          {auth?.user?.name[0]}
        </Avatar>
        <input
          ref={inputRef}
          type="text"
          style={{
            width: "100%",
            backgroundColor: "transparent",
            padding: "30px",
            border: "none",
            outline: "none",
            color: "white",
            fontSize: "20px",
          }}
        />
        <IconButton sx={{ ml: "auto", color: "white", mx: 1 }} onClick={handleSubmit}>
          <IoMdSend />
        </IconButton>
      </div>
      {chatMessages.length ? (
        <Button
          sx={{
            width: "200px",
            mx: "auto",
            my: 2,
            color: "white",
            fontWeight: "700",
            borderRadius: 3,
            bgcolor: red[300],
            ":hover": {
              bgcolor: red.A400,
            },
          }}
          onClick={handleDeleteChats}
        >
          Clear Conversation
        </Button>
      ) : (
        <div
          style={{
            height: "68.5px",
          }}
        ></div>
      )}
    </Box>
  );
};
export default Chat;
