import React from "react";
import {Title,Main,MainTitle,TitleBtn,I} from './styled'
function Home() {
    return (

      <Main>
            <Title>
                <MainTitle>
                    مرحبا بك في 
                    <br />
                    موقع الموعظة الإسلامي 
                </MainTitle>
                <TitleBtn>
                    إبدأ التصفح
                    <I className="fa fa-chevron-left"></I>
                </TitleBtn>
            </Title>
      </Main>
  )
}
  
export default Home;