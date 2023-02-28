import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import './App.css';
import EmailForm from "./components/EmailForm";



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

  var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 33, 33];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "My Predection For World Wide's Demand for Bulk Email Tool"
    }
  }
});

document.querySelector('#myChart').innerHTML= Chart;

  return (
    <><div>
      <h1>Dashboard</h1>
      <br/>
      <p>Welcome to the dashboard of Bulk Email Tool.</p>
      <h2>{goal || "No goal found"}</h2>
      <form onSubmit={addGoal}>
        <input
          placeholder="Add a Goal"
          value={tempGoal}
          onChange={(e) => setTempGoal(e.target.value)}
          type="text" />
        <input type="submit" />
      </form>
      <canvas id="myChart"></canvas>
    </div>
    <div>
        <EmailForm />
      </div>
      </>
      
  );
};

export default Dashboard;
