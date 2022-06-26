import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import ViewPost from "./pages/ViewPost";
import PostList from "./pages/PostList";

// Components
import Nav from "./components/global/Nav";

const AppWrapper = styled.div`
    width: 100%;
`;

function App() {
    return (
        <AppWrapper>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/home" element={<Navigate replace to="/" />} />
                    <Route path="/view-post" element={<ViewPost />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/post-list" element={<PostList />} />
                </Routes>
            </BrowserRouter>
        </AppWrapper>
    );
}

export default App;
