import React from "react";
import {Footer,Form,Name,Email,Textarea,Svg,Social,SocialLinke,Sub, Button} from './styled.js'
function Contact() {
    return (
      <Footer>
        <h3>تواصل معنا</h3>
        <Form>
          <Name type='text' placeholder='اسمك... ' className='nam' />
          <Sub type='text' placeholder='الموضوع... ' className='sub'/>
          <Email type='email' placeholder='البريد الالكتروني ...' className='em' />
          <Textarea placeholder='اكتب هنا...'></Textarea>
          <Button> send </Button>
        </Form>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path  fillOpacity="1" d="M0,32L48,42.7C96,53,192,75,288,69.3C384,64,480,
            32,576,42.7C672,53,768,107,864,106.7C960,107,1056,53,1152,48C1248,43,1344,85,1392,
            106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,
            320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </Svg>
        <Social>
            <SocialLinke href="#"><i className="fab fa-facebook"></i></SocialLinke>
            <SocialLinke href="#"><i className="fab fa-instagram"></i></SocialLinke>
            <SocialLinke href="#"><i className="fab fa-linkedin"></i></SocialLinke>
            <SocialLinke href="#"><i className="fab fa-twitter"></i></SocialLinke>
            <SocialLinke href="#"><i className="fab fa-telegram-plane"></i></SocialLinke>
            <SocialLinke href="#"><i className="fab fa-youtube"></i></SocialLinke>
        </Social>
    </Footer>
    );
  }
  
export default Contact;