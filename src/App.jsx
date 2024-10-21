// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter"; // This will be your new page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/counter" element={<Counter />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
