import React from "react";
import styled from "styled-components";
import HomeHeader from "../components/home/HomeHeader";

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

const HomeNav = styled.div`
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
`;

const Home = () => {
    return (
        <HomeWrapper>
            <HomeCoverWall />
            <HomeContent>
                <HomeHeader />
                <HomeNav>
                    <div className="about menu">About</div>
                    <div className="posts menu">Posts</div>
                    <div className="portfolio menu">Portfolio</div>
                    <div className="Daily menu">Daily</div>
                </HomeNav>
            </HomeContent>
        </HomeWrapper>
    );
};
export default Home;
