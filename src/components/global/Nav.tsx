import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WebNav = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 100;
    top: 30px;
    @media (max-width: 800px) {
        display: none;
    }
    .logo {
        font-family: "Pacifico", cursive;
        width: 30px;
        margin-left: 50px;
        font-size: 28px;
        cursor: pointer;
        text-decoration: none;
        color: black;
        transition: 0.5s all ease;
        &:hover {
            color: #48d4cf;
        }
    }
`;

const MobileNav = styled.div`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;

    .background {
        width: 100%;
        height: 50px;
        top: 0;
        left: 0;
        background: rgba(#f8f8f8, 0.7);
        backdrop-filter: blur(3px);
    }

    @media (min-width: 800px) {
        display: none;
    }

    .logo-link {
        width: 100%;
        text-decoration: none;
        color: black;
        text-align: center;
        position: absolute;
        top: 10px;
        left: 0;

        .logo {
            font-family: "Pacifico", cursive;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;

            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: black;
            color: white;
        }
    }
`;

const Nav = () => {
    return (
        <>
            <WebNav>
                <Link to="/" className="logo">
                    Log
                </Link>
            </WebNav>
            <MobileNav>
                <div className="background" />
                <Link className="logo-link" to="/">
                    <div className="logo">L</div>
                </Link>
            </MobileNav>
        </>
    );
};

export default Nav;
