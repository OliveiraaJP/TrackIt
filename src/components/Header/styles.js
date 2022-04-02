import styled from "styled-components";

export const $container = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;

    background-color: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    p {
        font-family: "Playball", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        color: #ffffff;
    }

    img{
        border-radius: 98.5px;
        width: 51px;
        height: 51px;
        object-fit: cover;
    }
`;
