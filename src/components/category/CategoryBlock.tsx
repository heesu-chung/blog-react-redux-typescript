import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const CategoryBlockWrapper = styled.span<{ op: any }>`
    color: black;
    font-size: 10px;
    font-weight: 300;
    padding: 3px 13px;
    border-radius: 20px;
    border: 1px solid #ccc;
    margin-right: 5px;
    cursor: pointer;

    ${(props) =>
        props.op === "post"
            ? css`
                  background: #48d4cf;
                  color: white;
              `
            : css`
                  background: white;
              `};
`;

const CategoryBlock = (key: any) => {
    return (
        <>
            {key.op === "post" ? (
                <Link
                    to={`/post-list/${key.doc}`}
                    className="link"
                    style={{ textDecoration: "none" }}
                >
                    <CategoryBlockWrapper op={key.op}>
                        {key.doc}
                    </CategoryBlockWrapper>
                </Link>
            ) : (
                <CategoryBlockWrapper op={"none"}>
                    {key.doc}
                </CategoryBlockWrapper>
            )}
        </>
    );
};

export default CategoryBlock;
