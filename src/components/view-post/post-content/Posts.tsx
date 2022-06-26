import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    border-top: 1px solid #eee;
    .title {
        font-size: 15px;
        padding: 5px;
        padding-left: 15px;
        font-weight: 300;
        color: #666;
        @media (max-width: 800px) {
            font-size: 12px;
        }
    }

    .date {
        font-size: 11px;
        text-align: right;
        padding: 5px;
        padding-right: 15px;
        color: #aaa;
    }
`;

const Posts = () => {
    return (
        <Link to="/view-post" style={{ textDecoration: "none" }}>
            <PostWrapper>
                <h3 className="title">this is title</h3>
                <h6 className="date">2022. 06. 26</h6>
            </PostWrapper>
        </Link>
    );
};

export default Posts;
