import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import VerticalNav from "./components/VerticalNav";
import Home from "./pages/Home";
import FounderNote from "./pages/FounderNote";
import FirstProduct from "./pages/FirstProduct";
import News from "./pages/News";

function AppContent() {
  const location = useLocation();
  const showTopNav = location.pathname !== '/' && location.pathname !== '/founder' && location.pathname !== '/product' && location.pathname !== '/news';

  return (
    <>
      {showTopNav && <Navigation />}
      <VerticalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<FounderNote />} />
        <Route path="/product" element={<FirstProduct />} />
        <Route path="/news" element={<News />} />
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
