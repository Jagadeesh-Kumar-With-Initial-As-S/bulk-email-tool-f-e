import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import './App.css';
import EmailForm from "./components/EmailForm";

const client_id = process.env.REACT_APP_CLIENT_ID


const Dashboard = () => {
  const [tempGoal, setTempGoal] = useState("");
  const [goal, setGoal] = useState("");

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
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isTokenValid = decodeToken(token);
    if (isTokenValid) {
      populateDashboard();
    } else {
      alert("Invalid Token");
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


  const [user, setUser] = useState({})
  const [token, setToken] = useState({})

  const onSuccess = (res) => {
      setUser(res.profileObj)
      setToken(res.tokenObj)
      let refreshTiming = (res.tokenObj.expires_in || 3300) * 1000
      const refreshToken = async () => {
          const newAuthRes = await res.reloadAuthResponse()
          refreshTiming = (newAuthRes.expires_in || 3300) * 1000
          setTimeout(refreshToken, refreshTiming)
      }
      setTimeout(refreshToken, refreshTiming)
  };

  const onFailure = (res) => {
      console.error(res)
  };

  const handleLogOut = () => {
      document.getElementById("email-form").reset();
      setUser({})
      setToken({})
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{goal || "No goal found"}</h2>
      <form onSubmit={addGoal}>
        <input
          placeholder="Add a Goal"
          value={tempGoal}
          onChange={(e) => setTempGoal(e.target.value)}
          type="text" />
        <input type="submit" />
      </form>
        <EmailForm/>
    </div>
      
  );
};

export default Dashboard;
