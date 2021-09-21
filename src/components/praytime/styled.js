import styled from "styled-components";

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;`

export const Card = styled.div`
    width: 250px;
    height: 320px;
    box-shadow: 0 0 1px #000;
    padding: 30px 20px;
    margin-bottom: 30px;
`
export const DivCircle = styled.div`
    position: relative;
`
export const Svg = styled.svg`
    width: 210px;
    height: 210px;
    animation: spin 6s linear infinite;
`
export const Circle = styled.circle`
    fill: none;
    stroke: #43a047;
    stroke-width: 10px;
    stroke-dasharray: 3;
    stroke-dashoffset: 1000;
    transform: translate(5px, 5px);
`
export const Praytime = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    font-family: cursive;
    color: #43a047;`

export const CardP = styled.p`
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    font-family: cursive;
    color: #43a047;`
