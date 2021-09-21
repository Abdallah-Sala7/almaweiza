import styled from "styled-components";

export const SurhasContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
export const Surah = styled.div`
    height: 100px;
    width: 150px;
    box-shadow: 0 0 5px rgb(0 0 0 / 40%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    transition: .5s ease-in-out;
    color: #232323;
    font-size: 17px;
    margin-bottom: 12px;
`
export const Oppen = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: rgb(246, 246, 246);
    overflow-y: scroll;
    transform: translateX(100%);
    transition: 0.5s all ease-in-out;
`

export const Ayat = styled.div`
    padding: 40px;
    margin: 20px auto;
    color: #121212;
    text-align: center;
    width: 60%;
`
export const AyatP = styled.p`
    display: inline-block;
    line-height: 2;
    word-spacing: 2px;
    margin: 0 5px;
`
export const Xclose = styled.p`
    position: sticky;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    box-shadow: 0 0 5px #000;
    display: flex;
    cursor: pointer;
    justify-content: center;
    font-size: 30px;
    line-height: 47px;
`