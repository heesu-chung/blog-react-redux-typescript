import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PostContent from "../components/view-post/PostContent";
import PostTitleCover from "../components/view-post/PostTitleCover";
import { getBlog } from "../redux/actions/blogActions";
import { RootStore } from "../redux/store";

const ViewPostWrapper = styled.div`
    overflow-x: hidden;
`;

const ViewPost = () => {
    const dispatch = useDispatch();
    const { title } = useParams();
    const { blogs } = useSelector((state: RootStore) => state);
    useEffect(() => {
        dispatch<any>(getBlog(title, blogs));
    }, [dispatch, title, blogs]);

    return (
        <ViewPostWrapper>
            <PostTitleCover />
            <PostContent />
        </ViewPostWrapper>
    );
};

export default ViewPost;
