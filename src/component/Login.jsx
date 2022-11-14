import "./Login.css";
export const Login = () => {
  return (
    <div id="Aav">
      <div id="big">
        <div id="header">Welcome</div>
        <div id="contents">
          <input id="input" placeholder="Email address" />
          <input id="input" placeholder="Password" />
          <button id="button">Continue</button>
          <div id="mid">
            <div id="mid-one">Don't have an account?</div>
            <div id="mid-two">Sign up</div>
          </div>
        </div>
        <div id="footer">
          <div id="lines">
            <div id="line-one"></div>
            <div id="or">or</div>
            <div id="line-two"></div>
          </div>
          <div id="footer-button">
            <img id="google" src="img/google.png" />
            <button id="google-btn">Continue with Google</button>
          </div>
        </div>
      </div>
      <img id="img" src="img/gna.png" />
    </div>
  );
};
