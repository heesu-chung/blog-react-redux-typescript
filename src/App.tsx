import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

const AppWrapper = styled.div`
    width: 100%;
`;

function App() {
    return (
        <AppWrapper>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate replace to="/" />} />
                </Routes>
            </BrowserRouter>
        </AppWrapper>
    );
}

export default App;
