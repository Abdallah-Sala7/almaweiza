import {  NavLink } from "react-router-dom";
import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.431);
    transition: .5s all ease-in-out;
    padding: 0 30px;
`
export const Logo = styled.div`
    font-family: 'thuluth-decorated';
    font-size: 55px;
    cursor: pointer;
`
export const Minu = styled.div`
    font-size: 30px;
    cursor: pointer;
    display:none;
    @media (max-width: 992px){
        display:block;
    }
`
export const Ul =styled.ul`
    display: flex;
    justify-content: space-between;
    width: 65%;
    @media (max-width: 992px){
        position: absolute;
        top: 70px;
        left: 0;
        width: 250px;
        height: 100vh;
        flex-wrap: wrap;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 20px;
        transform: translateX(-300px);
        transition: .3s;
    }
`

export const HeadLinke = styled(NavLink)`
    text-decoration: none;
    transition: .3s all ease-in-out;
    color: #fff;
    padding:10px;
    position:relative;
    font-size:20px;
    @media (max-width: 992px){
        color: #43a047;
        font-size: 25px;
        text-align: center;
    }
    &:before{
        transition: .3s all ease-in-out;
        content: "";
        position: absolute;
        bottom: 0px;
        right: 0px;
        background-color: #fff;
        width:0% ;
        height: 2px;
    }
    &:hover:before{
        width:100%;
    }
`
