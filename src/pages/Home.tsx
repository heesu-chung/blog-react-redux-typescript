import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import HomeHeader from "../components/home/HomeHeader";
import HomePostCard from "../components/home/HomePostCard";
import { IBlog, RootStore } from "../redux/Types";

const HomeWrapper = styled.div`
    width: 100%;
    margin-bottom: 100px;
`;

const HomeCoverWall = styled.div`
    width: 100%;
    height: 120px;
    background: #f8f8f8;

    @media (max-width: 800px) {
        height: 100px;
    }
`;

const HomeContent = styled.div`
    width: 45%;
    @media (max-width: 800px) {
        width: 90%;
    }
`;

const HomeNav = styled.div<{ contents: number }>`
    width: 100%;
    margin-top: 50px;

    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: 300;
    color: #aaa;
    cursor: pointer;

    .menu {
        border-top: 1px solid #ccc;
        padding: 10px 0;
        transition: 0.5s all ease;
        text-align: center;
        &:hover {
            color: #555;
        }
    }
    ${(props) =>
        props.contents === 1 &&
        css`
            .about {
                color: black;
                border-top: 1px solid black;
                font-weight: 500;
            }
        `}
    ${(props) =>
        props.contents === 2 &&
        css`
            .posts {
                color: black;
                border-top: 1px solid black;
                font-weight: 500;
            }
        `}
    ${(props) =>
        props.contents === 3 &&
        css`
            .portfolio {
                color: black;
                border-top: 1px solid black;
                font-weight: 500;
            }
        `}
    ${(props) =>
        props.contents === 4 &&
        css`
            .daily {
                color: black;
                border-top: 1px solid black;
                font-weight: 500;
            }
        `}
`;

const Home = () => {
    const { blogs } = useSelector((state: RootStore) => state);
    const posts = [...blogs];
    const [contents, setContents] = useState(2);

    const handleContents = (params: number) => {
        setContents(params);
    };

    return (
        <HomeWrapper>
            <HomeCoverWall />
            <HomeContent>
                <HomeHeader />
                <HomeNav contents={contents}>
                    <div
                        className="about menu"
                        onClick={() => handleContents(1)}
                    >
                        About
                    </div>
                    <div
                        className="posts menu"
                        onClick={() => handleContents(2)}
                    >
                        Posts
                    </div>
                    <div
                        className="portfolio menu"
                        onClick={() => handleContents(3)}
                    >
                        Portfolio
                    </div>
                    <div
                        className="daily menu"
                        onClick={() => handleContents(4)}
                    >
                        Daily
                    </div>
                </HomeNav>
                {contents === 1 && <div className="container"></div>}
                {contents === 2 &&
                    posts.map((doc: IBlog, idx: number) => (
                        <HomePostCard key={doc.number} doc={doc} />
                    ))}
                {contents === 3}
                {contents === 4}
            </HomeContent>
        </HomeWrapper>
    );
};
export default Home;
