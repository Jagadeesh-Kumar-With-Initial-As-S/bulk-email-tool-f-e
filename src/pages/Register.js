import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chart001 from "./components/Chart001";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const req = await fetch("https://bulk-email-tool-b-k.vercel.app/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: await JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await req.json();

    if (data.status == "ok") {
      alert("Registration Successful");
      navigate("/login");
    } else {
      alert("Duplicate Email");
    }
  };
  return (
    <><div>
      <h1>Register</h1>
      <br/>
      <p>Welcome to the registration page of Bulk Email Tool.</p>
      <form onSubmit={handleRegister}>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <br />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="submit" />
      </form>
    </div>
    <div>
      <br/>
        <p>If you have  already registered then <a href="https://bulk-email-tool-f-e.vercel.app/login">click here</a>.
          or copy and paste the following on browser to navigate to login. </p>
          <p>https://bulk-email-tool-f-e.vercel.app/login</p>
    </div>
    <div>
    <br/>
    <Chart001/>
    </div>
    </>
  );
};

export default Register;
