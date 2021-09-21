import styled from "styled-components";

export const Footer = styled.footer`
    padding-top: 90px;
    position: relative;
`
export const Form = styled.form`
    width: 60%;
    margin: auto;`

const Input = styled.input`
    padding: 8px;
    outline: none;
    border-radius: 4px;
    margin-bottom: 15px;
    border: 1px solid #9e9e9e;
    width: 49%; `

export const Sub = styled(Input)`
    margin-right: 1%;`

export const Name = styled(Input)`
    margin-left: 1%;`

export const Email = styled(Input)`
    width: 100%;`


export const Textarea = styled.textarea`
    width: 100%;
    height: 170px;
    outline: none;
    padding: 8px;
    border: 1px solid #9e9e9e;`

export const Button = styled.button`   
    width: 50%;
    background: #43a047;
    padding: 5px;
    border-radius: 25px;
    font-weight: bold;
    border: none;
    color: #fff;
    font-size: 25px;
    margin: 10px auto 23px;
    display: block;
    letter-spacing: 5px;
    font-family: cursive;
    cursor: pointer;
    line-height: 1.5;
`
export const Svg = styled.svg`
    transform: translateY(10px);
    fill: #43a047;`

export const Social = styled.div`
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0%);
    @media (max-width: 992px){
        bottom:10px;
    }`
export const SocialLinke = styled.a`
    font-size: 40px;
    margin: 10px;
    cursor: pointer;
    color: #fff;
    @media (max-width: 768px){
        font-size:25px;
    }`