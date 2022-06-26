import React from "react";
import styled from "styled-components";

const CategoryBlockWrapper = styled.span`
    color: black;
    font-size: 11px;
    font-weight: 300;
    padding: 3px 13px;
    border-radius: 20px;
    background: white;
    border: 1px solid #ccc;
    margin-right: 5px;
`;

const CategoryBlock = () => {
    return <CategoryBlockWrapper>category</CategoryBlockWrapper>;
};

export default CategoryBlock;
