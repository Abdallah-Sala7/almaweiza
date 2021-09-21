import axios from "axios";
import React, { useEffect, useState } from "react";
import {HadithContainer,HadithNum,ButtonCont,Buttons} from './styled.js'

function Hadeth() {
  const [count, setcount] = useState(0)
  const [hadeth, setHadeth] = useState([])
  useEffect(()=>{
    axios
    .get('https://api.hadith.sutanlab.id/books/muslim?range=1-300')
    .then(res =>{ setHadeth(res.data.data.hadiths[count].arab) })

  },[count])

  const theNext =()=>{
    count === 299 ? setcount(0) : setcount(count + 1)
  }
  const thePrev =()=>{
    count === 0 ? setcount(299) : setcount(count - 1)
  }
  return (
    <section >
      <h3>أحاديث</h3>
          <HadithContainer>
            {hadeth}
          </HadithContainer>
          <ButtonCont>
              <Buttons onClick={theNext} >التالي</Buttons>
              <HadithNum>{count + 1} - 300</HadithNum>
              <Buttons onClick={thePrev} >السابق</Buttons>
          </ButtonCont>
    </section>
  )
}

export default Hadeth;