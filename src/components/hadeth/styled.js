import styled from 'styled-components'

export const HadithContainer = styled.div`
    min-height: 350px;
    position: relative;
    box-shadow: 4px 4px 4px 0 #d1d9e6 inset, -4px -4px 4px 0px #d1d9e6 inset;
    color: #232323;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
`
export const ButtonCont = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export const Buttons = styled.div`
    background: linear-gradient(60deg , #66bb6a , #43a047);
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(76 175 88 / 40%);
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
`
export const HadithNum = styled(Buttons)`
    color: #43a047;
    background: transparent;
    cursor: default;
`