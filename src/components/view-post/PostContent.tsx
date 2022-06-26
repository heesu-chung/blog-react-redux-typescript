import React from "react";
import styled from "styled-components";
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
    return (
        <PostContentWrapper>
            <PostContentBlock>
                <div
                    className="article"
                    dangerouslySetInnerHTML={{ __html: "" }}
                />
                <HomeHeader />
                <PostMorePost />
            </PostContentBlock>
        </PostContentWrapper>
    );
};

export default PostContent;
