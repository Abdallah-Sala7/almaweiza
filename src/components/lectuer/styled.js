import styled from 'styled-components'

export const LectureCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    @media (max-width: 768px){justify-content:center;}
`
export const Right = styled.div`
    width: 48%;
    @media (max-width: 768px){
        width: 80%;
    }
`
export const Lec =styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgb(0 0 0 / 40%);
    padding: 20px;
    transition: .3s all ease-in-out;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        transform:scale(0.985);
    }
`
export const LecText = styled.div`
    color: #232323;
`
export const LecImgs =styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: auto;
    @media (max-width: 992px){
        width: 100px;
        height: 100px;
    }
`
export const Left = styled.div`
    position: sticky;
    top: 0;
    width: 48%;
    @media (max-width: 768px){
        width: 80%;
    }
`
export const Iframe = styled.iframe`
    width: 100%;
    height: 400px;
    border-radius: 6px;

`