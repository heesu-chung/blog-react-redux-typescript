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

const HomePostCard = ({ doc }: any) => {
    const { title, desc, date, category } = doc;

    const dateForm = (param: string) => {
        const item: any = param.split(" ");
        const day = item.slice(0, 3).join(" ");
        const ampm = item.slice(3, 4).join("") === "오후" ? 12 : 0;
        let hour = item.slice(4).join("").split(":");
        hour[0] = Number(hour[0]) + ampm;
        return day + " " + hour.slice(0, 2).join(":");
    };
    const newDate = dateForm(date);

    return (
        <Link
            to={`/view-post/${title}`}
            className="link"
            style={{ textDecoration: "none", color: "black" }}
        >
            <HomePostCardWrapper>
                <CardContent>
                    {category.map((doc: string, index: number) => (
                        <CategoryBlock key={index} doc={doc} />
                    ))}
                    <h2 className="title">{title}</h2>
                    <p className="desc">{desc.slice(0, 85)}...</p>
                    <h5 className="date">{newDate}</h5>
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
