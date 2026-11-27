import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const registerdata = location.state;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      registerdata &&
      email === registerdata.email && password === registerdata.password
    ) {
      alert("Login Successful!");

      console.log("Owner Login Successful");
      console.log("Email:", email);

      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>

        <h2>Gym Management System</h2>
        <h3>Owner Login</h3>

        <input
          type="email"
          placeholder="Enter Owner Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          required
        />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default Login;