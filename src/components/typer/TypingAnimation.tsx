import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        750,
        "Physics.",
        1500,
        "Education.",
        1500,
        "Programming.",
        1500,
        "Anything.",
        3000,
      ]}
      speed={30}
      className="typing-animation"
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
