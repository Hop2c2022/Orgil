import logo from "./logo.svg";
import "./App.css";
import { Stars } from "./components/star";
const Chal4 = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className="big">
      <div className="left">
        <div className="stars">
          {arr.map((e) => (
            <Stars width={24} height={24} />
          ))}
        </div>
        <div className="text">
          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </div>
        <div className="left-3">
          <img src="1.png" />
          <h3>Amy Klassen</h3>
        </div>
      </div>
      <div id="right">
        <img src="2.png" id="img1" />
        <div id="header">Data-Driven Design is Killing Our Instincts</div>
        <div id="texts">
          <div id="text">
            Our latest updates and blogs about managing your team
          </div>
          <div id="text">
            Our latest updates and blogs about managing your team
          </div>
        </div>
        <div id="footer">
          <img src="1.png" id="img2" />
          <div id="footer2">
            <div id="footer2-1">Jane Cooper</div>
            <div id="footer2-2">|</div>
            <div id="footer2-1">2nd January,2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chal4;
