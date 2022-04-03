import styled from "styled-components";

export const $container = styled.div`
    width: 340px;
    height: 94px;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    padding: 13px;
`;

export const $texts = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }

    h2 {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
        margin-bottom: 3px;
        
        span{
            color: #8FC549;

        }
    }
`
