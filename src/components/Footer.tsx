import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",

          marginTop: 50,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center" }}>
          Built by{" "}
          <Link to={"https://yan.software"} className="nav-link" target="_blank">
            Johannes
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
