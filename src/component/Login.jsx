import "../App.css";
export const Login = () => {
  return (
    <div id="big">
      <div id="content">
        <div id="content-mail">
          <div id="mail">Email</div>
          <input id="mail-inp" placeholder="  Email" />
        </div>
        <div id="content-pass">
          <div id="pass">Password</div>
          <input id="pass-inp" placeholder="  Password" />
        </div>
        <button id="button">Log in</button>
      </div>
      <img id="img" src="img/flower.png" />
    </div>
  );
};
