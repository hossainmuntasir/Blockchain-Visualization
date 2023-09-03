import { Home } from "./Pages/home";
import { Graph } from "./Pages/Graph";
import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Graph" element={<Graph />} /> */}
            <Route path="/Graph/:initialSearchTerm" element={<Graph />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )

}

export default App