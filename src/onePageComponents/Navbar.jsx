import reactLogo from "../assets/react.svg";
import "../App.css";

export default function Navbar(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={`container ${props.lightMode ? "light" : ""}`}>
      <div
        // eslint-disable-next-line react/prop-types
        className={`navbar-header ${props.lightMode ? "light" : ""}`}
      >
        <div>
          <img src={reactLogo} alt="" />
          <h1>ReactFacts</h1>
        </div>
        <p
          // eslint-disable-next-line react/prop-types
          className={props.lightMode ? "light" : ""}
        >
          React Course - Project 1
        </p>
        <div className="switch-button">
          <span
            // eslint-disable-next-line react/prop-types
            className={`light-span ${props.lightMode ? "light" : ""}`}
          >
            Light
          </span>
          <label
            htmlFor="toggle"
            // eslint-disable-next-line react/prop-types
            className={props.lightMode ? "light" : ""}
            // eslint-disable-next-line react/prop-types
            onClick={props.toggleFunction}
          >
            {/* eslint-disable-next-line react/prop-types */}
            <div className={`circle ${props.lightMode ? "light" : ""}`}></div>
          </label>
          <span
            // eslint-disable-next-line react/prop-types
            className={`dark-span ${props.lightMode ? "light" : ""}`}
          >
            Dark
          </span>
        </div>
      </div>
    </div>
  );
}
