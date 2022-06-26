import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostsContainer = styled.div`
    width: 100%;
    margin-top: 50px;

    border: 1px solid #ccc;
`;

const PostsMore = styled.div`
    text-decoration: none;
    width: 100%;

    font-size: 13px;
    font-weight: 500;
    padding: 10px;
    padding-left: 15px;
    color: #48d4cf;

    transition: 0.5s all ease;
    &:hover {
        background: #f8f8f8;
    }
    cursor: pointer;
`;

const PostMorePost = () => {
    return (
        <PostsContainer>
            <Link to="/post-list" style={{ textDecoration: "none" }}>
                <PostsMore>다른 포스트...</PostsMore>
            </Link>
        </PostsContainer>
    );
};

export default PostMorePost;
