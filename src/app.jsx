import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import FounderNote from "./pages/FounderNote";
import FirstProduct from "./pages/FirstProduct";

function AppContent() {
  const location = useLocation();
  const showTopNav = location.pathname !== '/';

  return (
    <>
      {showTopNav && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<FounderNote />} />
        <Route path="/product" element={<FirstProduct />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
