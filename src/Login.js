import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    // Prevent the page for refreshing
    e.preventDefault();

    // Firebase LogIn
  };

  const register = (e) => {
    // Prevent the page for refreshing
    e.preventDefault();

    // Firebase Register
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} className="login__signInButton">
            Sign-In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
