import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CategoryBlock from "../category/CategoryBlock";
import "../../assets/logo512.png";

const HomePostCardWrapper = styled.div`
    width: 100%;
    padding: 40px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s all ease;
    @media (max-width: 800px) {
        padding: 20px 0;
    }

    &:hover {
        background-color: #f8f8f8;
    }

    .link {
        text-decoration: none;
    }
`;

const CardContent = styled.div`
    flex: 3;
    width: 100%;
    height: 120px;

    @media (max-width: 800px) {
        flex: 4;
    }

    .category {
        font-size: 12px;
        color: black;

        @media (max-width: 800px) {
            font-size: 10px;
        }
    }
    .title {
        font-size: 20px;
        color: black;
        letter-spacing: 0.5px;
        margin: 10px 0;

        @media (max-width: 800px) {
            font-size: 14px;
            font-weight: 400;
        }
    }
    .desc {
        font-size: 14px;
        letter-spacing: 0.5px;
        color: #888;

        @media (max-width: 800px) {
            font-size: 11px;
        }
    }
    .date {
        margin: 20px 0;
        font-size: 12px;
        font-weight: 300;
        color: #aaa;

        @media (max-width: 800px) {
            font-size: 10px;
            margin: 10px 0;
        }
    }
`;

const CardImage = styled.div`
    flex: 1;
    text-align: right;
    width: 120px;
    height: 120px;
    background-color: #ccc;
    .img {
        @media (max-width: 800px) {
            width: 60px;
            height: 60px;
        }
    }
`;

const HomePostCard = () => {
    return (
        <Link
            to="/view-post"
            className="link"
            style={{ textDecoration: "none", color: "black" }}
        >
            <HomePostCardWrapper>
                <CardContent>
                    <CategoryBlock />
                    <h2 className="title">This is Title</h2>
                    <p className="desc">about desc</p>
                    <h5 className="date">2022. 6. 26</h5>
                </CardContent>
                <CardImage>
                    {/* <img
                        src="../../assets/logo512.png"
                        alt="../../assets/logo512.png"
                    /> */}
                </CardImage>
            </HomePostCardWrapper>
        </Link>
    );
};

export default HomePostCard;
