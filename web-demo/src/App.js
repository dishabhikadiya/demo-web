import React from "react";
import Header from "./Header/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
