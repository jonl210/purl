import { useRef, useState } from "react";
import "../assets/home-style.css";
import logo from "../assets/purl-logo.svg";

const Home = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const fetchLinkMetaData = () => {
    if (isURL(link)) {
      setError(false);
    } else {
      setError(true);
      inputRef.current.focus();
    }
  };

  const isURL = (str) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
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
          ref={inputRef}
          autoFocus
        />
        <button id="generate-btn" onClick={() => fetchLinkMetaData()}>
          Generate
        </button>
      </div>
      {error ? <p id="error-msg">Please enter a valid URL.</p> : null}
    </div>
  );
};

export default Home;
