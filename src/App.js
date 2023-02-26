import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Advertisement from "./pages/Advertisement.js"

function App() {
  return (
    <div className="App">
      <Advertisement/>
      <Router>
        <Routes>
          <Route element={<Register />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </Router>
      <Advertisement/>
    </div>
  );
}

export default App;
