import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import './App.css';
import Chart003 from "./components/Chart003";
import EmailForm from "./components/EmailForm";




const Dashboard = () => {
  const [tempGoal, setTempGoal] = useState("");
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  const populateDashboard = async () => {
    const token = localStorage.getItem("token");
    const req = await fetch("https://bulk-email-tool-b-k.vercel.app/api/dashboard", {
      headers: { "x-access-token": token },
    });

    const data = await req.json();

    if (data.status == "ok") {
      setGoal(data.goal);
    } else {
      alert("Invalid Token");
      navigate("/");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isTokenValid = decodeToken(token);
    if (isTokenValid) {
      populateDashboard();
    } else {
      alert("Invalid Token");
      navigate("/");
    }
  });

  const addGoal = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const req = await fetch("https://bulk-email-tool-b-k.vercel.app/api/dashboard", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-access-token": token },
      body: await JSON.stringify({
        tempGoal,
      }),
    });

    const data = await req.json();

    if (data.status == "ok") {
      setGoal(tempGoal);
      setTempGoal("");
    } else {
      alert("Invalid Token");
    }
  };

  return (
    <><div>
      <h1>Dashboard</h1>
      <br/>
      <p>Welcome to the dashboard page of Bulk Email Tool.</p>
      <h2>{goal || "No goal found"}</h2>
      <form onSubmit={addGoal}>
        <input
          placeholder="Add a Goal"
          value={tempGoal}
          onChange={(e) => setTempGoal(e.target.value)}
          type="text" />
        <input type="submit" />
      </form>
      <br/>
      <br />
      <br />
      <Chart003 />
    </div>
    <div>
        <EmailForm />
      </div>
      </>
      
  );
};

export default Dashboard;
