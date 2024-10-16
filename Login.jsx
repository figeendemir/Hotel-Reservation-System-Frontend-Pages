import "./login.css";
import Footer from "../../components/footer/Footer";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        setError("");
        onLogin(username); // Pass the username to onLogin
        if (username === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      } else {
        setError("Invalid username or password!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleLogin} className="logForm">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              className="input-box-input"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FontAwesomeIcon icon={faUser} className="logIcon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              className="input-box-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon icon={faLock} className="logIcon" />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          {error && <p style={{color: "red"}}>{error}</p>}
          <div className="register-link">
            <p>Don't have an account?<a href="/register"> Register</a></p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
