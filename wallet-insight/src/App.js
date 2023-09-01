import { Home } from "./pages/Home";
import { Graph } from "./pages/Graph";
import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Graph" element={<Graph />} /> */}
            <Route path="/Graph/:walletId" element={<Graph />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )

}

export default App