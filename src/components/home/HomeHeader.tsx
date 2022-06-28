import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/Types";

const HeaderWrapper = styled.div`
    width: 100%;
`;

const HeaderIntro = styled.div`
    width: 100%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
`;

const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    .name {
        font-size: 28px;
    }
    .about {
        font-size: 14px;
        color: #777;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 30px 0;

    @media (max-width: 800px) {
        width: 100%;
        margin-bottom: 0;
    }
    .post-wrapper {
        flex: 1;
        .post-desc {
            font-size: 14px;
            font-weight: 300;
            color: #777;
        }
        .post-info {
            font-size: 20px;
            font-weight: 300;
            color: #777;
        }
    }
    .btn-wrapper {
        text-align: right;
        flex: 2;
        .btn {
            width: 90px;
            height: 30px;
            font-weight: 300;
            font-size: 14px;
            text-decoration: none;
            margin-right: 10px;
            border-radius: 15px;
            background-color: white;
            border: 1px solid #ccc;
            cursor: pointer;
            transition: 0.5s all ease;

            &:hover {
                background-color: #f8f8f8;
                color: white;
            }

            a {
                text-decoration: none;
                color: black;
            }
        }
        .create-post .btn {
            border: none;
            border: 1px solid #48d4cf;
            color: #48d4cf;
        }
        .github-link {
            width: 63px;
        }
    }
`;

const HomeHeader = () => {
    const { blogs } = useSelector((state: RootStore) => state);
    const postsLen = [...blogs].length;

    return (
        <HeaderWrapper>
            <HeaderIntro>
                <IntroWrapper>
                    <div className="name">데데뎁 Dededef</div>
                    <div className="about">
                        개발과 창작을 함께 하고 있습니다
                    </div>
                </IntroWrapper>
                <InfoWrapper>
                    <div className="post-wrapper">
                        <div className="post-desc">포스트</div>
                        <div className="post-info">{postsLen}</div>
                    </div>
                    <div className="btn-wrapper">
                        <Link to="/create-post" className="create-post">
                            <button className="btn">작성하기</button>
                        </Link>
                        <button className="github-link btn">
                            <a href="https://github.com/heesu-chung">Github</a>
                        </button>
                    </div>
                </InfoWrapper>
            </HeaderIntro>
        </HeaderWrapper>
    );
};

export default HomeHeader;
