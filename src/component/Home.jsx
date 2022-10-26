import "../App.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="big">
      <div className="header">
        <div className="team">team</div>
        <div className="menu">
          <div className="menu-text">Products</div>
          <div className="menu-text">Services</div>
          <div className="menu-text">Contact</div>
          <Link to={"/login"}>
            <div className="menu-text">Log in</div>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="content-top">
          <div className="content-top-one">
            Instant collaborations for remote teams
          </div>
          <div className="content-top-two">
            All in one for your remote team chats, collaboration and track
            projects
          </div>
        </div>
        <div className="content-down">
          <input placeholder="Email" className="input" />
          <button className="button">Get early access</button>
        </div>
      </div>
    </div>
  );
};
