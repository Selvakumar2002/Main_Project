import './AuthProvider.css'; // Ensure you have the necessary CSS file

const AuthProvider = () => {
  return (
    <>
      <div className="login-light"></div>
      <div className="login-box">
        <form action="#">
          <input type="checkbox" className="input-check" id="input-check" />
          <label htmlFor="input-check" className="toggle">
            <span className="text off">off</span>
            <span className="text on">on</span>
          </label>
          <div className="light"></div>

          <h2>Login</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
            <div className="input-line"></div>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
            <div className="input-line"></div>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthProvider;
