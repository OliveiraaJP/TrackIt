import styled from "styled-components";

export const $container = styled.div`
    margin: 98px 17px 70px 17px;

    p {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;

export const $navbar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;

    p {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126ba5;
    }

    button {
        width: 40px;
        height: 35px;
        background: #52b6ff;
        border-radius: 4.63636px;
        border: none;
        color: #ffffff;
        font-family: "Lexend Deca";
        font-size: 26px;
        line-height: 34px;
        text-align: center;
    }
`;

export const $containerHabit = styled.div`
    width: 340px;
    height: 180px;
    background: #ffffff;
    border-radius: 5px;
    padding: 19px;
    position: relative;

    button {
        width: 84px;
        height: 35px;
        border-radius: 4.63636px;
        text-align: center;
        border: none;

        &.save {
            background: #52b6ff;
            color: #ffffff;
            position: absolute;
            bottom: 10px;
            right: 20px;
        }

        &.cancel {
            color: #52b6ff;
            background: #ffffff;
            position: absolute;
            bottom: 10px;
            right: 130px;
        }
    }
`;

export const $boxName = styled.input`
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 11px;
    margin-bottom: 8px;

    &::placeholder {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #dbdbdb;
    }
`;

export const $boxDays = styled.div`
    display: flex;
`;

export const $button = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    margin-right: 4px;
    font-family: "Lexend Deca";
    background: ${(props) => (props.selecionado ? "#CFCFCF" : "#FFFFFF")};
    color: ${(props) => (props.selecionado ? "#FFFFFF" : "#DBDBDB")};
`;

export const $getTodayBox = styled.div`
    width: 340px;
    height: 91px;
    margin-bottom: 15px;

    p {
        max-width: 310px;
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 8px;
    }
`;
