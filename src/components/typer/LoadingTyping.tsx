import { TypeAnimation } from "react-type-animation";

const LoadingTyping = () => {
  return (
    <TypeAnimation
      sequence={[500, "...", 1000, "", 1000, "...", 1000, "", 500]}
      speed={10}
      omitDeletionAnimation={true}
      style={{
        fontSize: "20px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default LoadingTyping;
