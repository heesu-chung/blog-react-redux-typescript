import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootStore } from "../../redux/Types";
import CategoryBlock from "../category/CategoryBlock";
import HomeHeader from "../home/HomeHeader";
import PostMorePost from "./post-content/PostMorePost";

const PostContentWrapper = styled.div`
    width: 100%;
    position: absolute;

    top: 450px;
    background-color: white;
`;

const PostContentBlock = styled.div`
    width: 45%;
    margin: 30px auto;
    @media (max-width: 800px) {
        width: 90%;
    }
    .article {
        line-height: 2rem;
        margin-bottom: 50px;
        text-align: justify;
        text-indent: 15px;
        @media (max-width: 800px) {
            line-height: 1.5rem;
        }
    }
    .intro {
        margin-top: 100px;
    }
`;

const PostContent = () => {
    const { blog } = useSelector((state: RootStore) => state);
    const categoryArr = blog.category;
    return (
        <PostContentWrapper>
            <PostContentBlock>
                <div
                    className="article"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                {[...categoryArr].map((doc: string, index) => (
                    <CategoryBlock key={index} doc={doc} op={"post"} />
                ))}
                <HomeHeader />
                <PostMorePost />
            </PostContentBlock>
        </PostContentWrapper>
    );
};

export default PostContent;
