import React, { useRef, useState, useMemo } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateListWrapper = styled.div`
    width: 45%;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        width: 90%;
    }
`;

const CreateInput = styled.input`
    height: 50px;
    font-size: 22px;
    border: none;
    border-bottom: 1px solid #aaa;
    margin-bottom: 20px;
`;

const InputCategories = styled.div`
    padding: 10px 0;
    margin-bottom: 30px;
    overflow-x: hidden;
`;

const SubmitButton = styled.button`
    width: 100px;
    height: 30px;
    margin-top: 30px;
    border-radius: 15px;
    border: 1px solid #aaa;
    background: white;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.5s all ease;
    &:hover {
        background: #48d4cf;
        color: white;
        border: 1px solid #48d4cf;
    }
`;

const CreatePost = () => {
    const QuillRef = useRef<ReactQuill>();
    const [contents, setContents] = useState("Contents Here...");

    const imageHandler = () => {};

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [
                        { header: [1, 2, 3, 4, 5, 6, false] },
                        "bold",
                        "italic",
                        "blockquote",
                        "code-block",
                        "image",
                        "video",
                    ],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
        }),
        []
    );

    return (
        <CreateListWrapper>
            <CreateInput placeholder="Title here..." />
            <CreateInput placeholder="SubTitle here..." />
            <CreateInput placeholder="Category here...then press enter" />
            <InputCategories />
            <ReactQuill
                ref={(element) => {
                    if (element !== null) {
                        QuillRef.current = element;
                    }
                }}
                modules={modules}
                value={contents}
                onChange={setContents}
                theme="snow"
                style={{ height: "500px" }}
            />
            <SubmitButton style={{ marginTop: "80px" }}>작성하기</SubmitButton>
        </CreateListWrapper>
    );
};

export default CreatePost;
