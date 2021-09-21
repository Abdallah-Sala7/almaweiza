import styled from 'styled-components'

export const Main = styled.div`
    background: url(imge/1.jpg) center center/cover no-repeat;
    height:100vh;
    padding:0 20px;
`
export const Title = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
`
export const MainTitle = styled.h2`
    line-height: 1.9;
    font-size: 40px;
    margin-bottom: 30px;
`
export const TitleBtn = styled.button`
    cursor: pointer;
    border: 2px solid #fff;
    background: none;
    border-radius: 5px;
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: baseline;
    position: relative;
    transition: .3s all ease-in-out;
    padding: 5px 15px;
    box-shadow: inset -0px 0px #fff;
    &:hover{
        color:#000;
        box-shadow: inset -180px 0px #fff;
    }

`
export const I = styled.i`
    margin-right: 10px;
    font-size: 19px;
`