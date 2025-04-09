import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CardDetail from "./components/CardDetails";
import Wishlist from "./components/Wishlist";
import Notfound from "./components/Notfound";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/carDetail" element={<CardDetail />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
