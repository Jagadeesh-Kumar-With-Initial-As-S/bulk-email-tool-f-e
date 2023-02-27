import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const req = await fetch("https://bulk-email-tool-b-k.vercel.app/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: await JSON.stringify({
        email,
        password,
      }),
    });

    const data = await req.json();

    if (data.status == "ok") {
      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } else {
      alert("Wrong Email or Password");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <br/>
      <p>Welcome to the login page of Bulk Email Tool.</p>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{width: "1000px"}}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{width: "1000px"}}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
