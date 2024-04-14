import reactLogo from "../assets/react.svg";
import "../App.css";

export default function Navbar() {
  return (
    <div className="navbar-header">
      <div>
        <img src={reactLogo} alt="" />
        <h1>ReactFacts</h1>
      </div>
      <p>React Course - Project 1</p>
    </div>
  );
}
