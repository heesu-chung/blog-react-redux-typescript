import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Pages
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import ViewPost from "./pages/ViewPost";
import PostList from "./pages/PostList";

// Components
import Nav from "./components/global/Nav";
import ScrollToTop from "./components/global/ScrollToTop";

// Dispatch Action
import { getHomeBlogs } from "./redux/actions/blogActions";

const AppWrapper = styled.div`
    width: 100%;
`;

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(getHomeBlogs);
        console.log("dispatch");
    }, [dispatch]);

    return (
        <AppWrapper>
            <BrowserRouter>
                <ScrollToTop />
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
