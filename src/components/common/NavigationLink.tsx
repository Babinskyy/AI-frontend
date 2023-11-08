import { Link } from "react-router-dom";

type Props = {
  to: string;

  text: string;

  onClick?: () => Promise<void>;
  isChat: boolean;
};

const NavigatonLink = (props: Props) => {
  return (
    <Link
      onClick={props.onClick}
      to={props.to}
      style={{ background: "#51538f", color: "white" }}
      className="nav-link"
    >
      {props.text}
    </Link>
  );
};
export default NavigatonLink;
