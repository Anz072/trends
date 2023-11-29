import './login-container.styles.css';

const LoginContainer = ({children}) => {
  return (
    <div className="login-initial-container">
      {children}
    </div>
  );
};

export default LoginContainer;
