import styled from "styled-components";



export const $container = styled.div`
width: 80%;
margin: auto;

    img{
        width: 155px;
        display: block;
        margin: auto;
        margin-top: 80px;
        margin-bottom: 20px;
    }

    p{
        font-family: "Playball", sans-serif;
        font-size: 67px;
        color: #126BA5;
        display: flex;
        justify-content: center;
    }

    span{
        margin-top: 25px;
        display: flex;
        justify-content: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;

            input{
                width: 303px;
                height: 45px;
                margin-bottom: 6px;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                padding-left: 10px;

                &::placeholder{
                    color: #DBDBDB;
                    font-size: 20px;
                }

                &.load{
                    &::placeholder{
                    color: #AFAFAF;
                    font-size: 20px;
                }
                }
            }

            button{
                width: 303px;
                height: 45px;
                margin-bottom: 6px;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                padding: 0;
                background-color: #52B6FF;
                color: #FFFFFF;
                font-size: 21px;
                line-height: 26px;

                &.load{
                    opacity: 0.7;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }        
    }
`