import "./login.styles.css";
import ThumbnailLogo from "../../assets/temp1.png";
import LoginContainer from "../../components/login-container/login-container.component";
import LoginForm from "../../components/login-form/login-form.component";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <img
        className="thumbnail-logo"
        src={ThumbnailLogo}
        alt="Thumbnail Logo"
      />
      <div className="login-main-container">
        <LoginContainer>
          <h2>T R E N D S</h2>
          <LoginForm />
        </LoginContainer>
        <LoginContainer>
          <p>Don't have an account?</p>
          <Link to="/home" className="sign-up-link" onClick={() => {}}>
            {" "}
            Sign up
          </Link>
        </LoginContainer>
      </div>
    </div>
  );
};

export default Login;
