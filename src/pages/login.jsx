import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    console.log("Owner Login Successful");
    console.log("Email:", email);

    alert("Login Successful!");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2>Gym Management System</h2>
      <h3>Owner Login</h3>

      <form onSubmit={handleLogin}>
        <input
          type="email" placeholder="Enter Owner Email" value={email} onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password" placeholder="Enter Password"  value={password} onChange={(e) => setPassword(e.target.value)} minLength={8}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;