import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { RootStore } from "../../../redux/Types";
import Posts from "./Posts";

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
    const { blogs } = useSelector((state: RootStore) => state);
    const { title } = useParams();
    let idx = 0;
    let morePosts: any = [];
    [...blogs].forEach((el: any, index) => {
        if (el.title === title) {
            idx = index;
        }
    });
    if (idx > 2 && idx < [...blogs].length - 2) {
        morePosts = [...blogs].slice(idx - 2, idx + 3);
    } else if (idx <= 2) {
        morePosts = [...blogs].slice(0, idx + 4);
    }

    return (
        <PostsContainer>
            <Link to="/post-list" style={{ textDecoration: "none" }}>
                <PostsMore>다른 포스트...</PostsMore>
                {[...morePosts].map((el: any, index) => (
                    <Posts key={index} doc={el} />
                ))}
            </Link>
        </PostsContainer>
    );
};

export default PostMorePost;
