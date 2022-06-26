import React from "react";
import styled from "styled-components";
import PostContent from "../components/view-post/PostContent";
import PostTitleCover from "../components/view-post/PostTitleCover";

const ViewPostWrapper = styled.div``;

const ViewPost = () => {
    return (
        <ViewPostWrapper>
            <PostTitleCover />
            <PostContent />
        </ViewPostWrapper>
    );
};

export default ViewPost;
