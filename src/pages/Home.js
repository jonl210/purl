import { useState } from "react";
import "../assets/home-style.css";
import logo from "../assets/purl-logo.svg";

const Home = () => {
  const [link, setLink] = useState("");

  const fetchFromURL = async () => {
    if (link) {
    } else {
    }
  };

  return (
    <div id="container">
      <img src={logo} style={{ width: "8rem" }} alt="" />
      <p
        style={{
          fontSize: "1.2rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        Generate pretty URL previews
      </p>
      <div style={{ display: "flex" }}>
        <input
          id="url-input"
          type="url"
          name="link"
          placeholder="Paste URL here"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button id="generate-btn" onClick={() => fetchFromURL()}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default Home;
