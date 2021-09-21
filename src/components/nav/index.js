import React from "react";
import {Header,Logo,Ul,HeadLinke, Minu} from './styled'
function Nav() {

    const oppenNav =()=>{
        document.querySelector("Header UL").classList.toggle("active")
    }
    return (

        <Header>
            <Logo>الموعظة</Logo>
            <Minu onClick={oppenNav}>
                <i className="fa fa-align-justify"></i>
            </Minu>
            <Ul>
                <HeadLinke exact to='/'>الصفحة الرئيسية</HeadLinke>
                <HeadLinke to='/hadeth'>أحاديث</HeadLinke>
                <HeadLinke to='/lec'>محاضرات</HeadLinke>
                <HeadLinke to='/quran'>الْقُرْآن الْكَرِيْم</HeadLinke>
                <HeadLinke to='/pray'>أوقات الصلاة</HeadLinke>
                <HeadLinke to='/contact'>تواصل معنا</HeadLinke>
            </Ul>
        </Header>

    )
  }
  
export default Nav;