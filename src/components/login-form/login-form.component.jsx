import { useState } from "react";
import "./login-form.styles.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (event) => {
    const value = event.target.value;
    event.target.name === "email" ? setEmail(value) : setPassword(value);
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log('LOGIN EXECUTED')
  }

  return (
    <form className="login-input-container" onSubmit={submitHandler}>
      <div>
        <input
          className="login-input"
          name="email"
          type="email"
          placeholder="Email"
          onChange={changeHandler}
        />
      </div>
      <div>
        <input
          className="login-input"
          name="password"
          type="password"
          placeholder="Password"
          onChange={changeHandler}
        />
      </div>
      <button type="submit" className="login-button">Log in</button>
    </form>
  );
};

export default LoginForm;
