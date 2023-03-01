import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Advertisement from "./pages/Advertisement.js"
import { Contact } from "./pages/Contact";
import NavBar from "./pages/components/NavBar";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Advertisement/>
      <NavBar />
      <br/>
      <div className="pages">
        <Routes>
          <Route element={<Register />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route  element={<Contact />} path="/contact" />
        </Routes>
        </div>
        <Advertisement/>
      </Router>
      
    </div>
  );
}

export default App;
