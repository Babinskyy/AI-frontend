import { Box } from "@mui/material";
import { MutableRefObject } from "react";

const questions = [
  "How does a quantum computer work? 🖥️",
  "Explain photosynthesis to a 5 year old. 🌿",
  "How do I prepare Carbonara? 🍝",
  "Role-play Snape, inform Hermione that she has detention. 🧙‍♂️",
];

type Props = {
  handleSubmit: () => Promise<void>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
};

const ExampleQuestions = (props: Props) => {
  const handleClick = (e: any) => {
    if (props.inputRef.current) {
      props.inputRef.current.value = e.target.innerText;
      props.handleSubmit();
    }
  };
  return (
    <Box className="question-container">
      {questions.map((q, index) => {
        return (
          <Box className="question" key={index} onClick={handleClick}>
            {q}
          </Box>
        );
      })}
    </Box>
  );
};

export default ExampleQuestions;
