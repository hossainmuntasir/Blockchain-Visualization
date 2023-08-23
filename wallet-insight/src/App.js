import React from 'react';
import SearchBar from "./components/search-bar/search-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { default as Home } from "./Pages/home";
import { default as GraphPage } from "./Pages/graph-page";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GraphPage" element={<GraphPage />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
