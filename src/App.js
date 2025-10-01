import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
   return (
    <Router>
      <Navbar />
      <Topbar />
      <Routes>
       <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
