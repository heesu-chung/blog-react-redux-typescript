import React from "react";
import styled from "styled-components";
import CategoryBlock from "../../category/CategoryBlock";

const PostCategoryWrapper = styled.div`
    width: 100%;
    margin: 50px 0;
`;

const PostCategory = () => {
    return (
        <PostCategoryWrapper>
            <CategoryBlock />
        </PostCategoryWrapper>
    );
};

export default PostCategory;
