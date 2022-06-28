import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/Types";
import HomePostCard from "../components/home/HomePostCard";
import { IBlog } from "../redux/Types";
import HomeHeader from "../components/home/HomeHeader";
import { useParams } from "react-router-dom";

const PostListWrapper = styled.div`
    margin: 50px auto;
    width: 45%;

    @media (max-width: 800px) {
        width: 90%;
    }

    .desc-category {
        font-size: 20px;
        font-weight: 700;
        margin-top: 100px;
        margin-bottom: 30px;
        text-align: center;
        @media (max-width: 800px) {
            font-size: 15px;
        }
    }
`;

const PostList = () => {
    const { blogs } = useSelector((state: RootStore) => state);
    const posts = [...blogs];
    const { category } = useParams();
    const categoryPosts = [...blogs].filter(
        (el: any) => el.category.indexOf(category) !== -1
    );

    return (
        <PostListWrapper>
            {category ? (
                <>
                    <p className="desc-category">
                        '{category}' 카테고리로 검색한 결과입니다
                    </p>
                    {categoryPosts.map((doc: IBlog, idx: number) => (
                        <HomePostCard key={doc.number} doc={doc} />
                    ))}
                </>
            ) : (
                posts.map((doc: IBlog, idx: number) => (
                    <HomePostCard key={doc.number} doc={doc} />
                ))
            )}
            <HomeHeader />
        </PostListWrapper>
    );
};

export default PostList;
