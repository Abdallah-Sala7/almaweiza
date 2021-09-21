import axios from "axios";
import React, { useEffect,useState } from "react";
import {Card,CardP,Cards,Circle,DivCircle, Praytime, Svg} from './styled.js'

function Pray() {
  
  const [prays, setprays] = useState([])
  const praysTime = []

  useEffect(() => {
    axios
    .get('http://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8')
    .then(res => setprays(res.data.data.timings))
  }, [])

    for(let pray in prays){
      praysTime.push ({time: prays[pray], title:pray})
    }

  return (
    <section>
      <h3>أوقات الصلاة</h3>      
      <Cards>
        {praysTime.map(item =>{
          return(
            <Card key={Math.random()}>
              <DivCircle>
                <Svg>
                    <Circle cx="100" cy = "100" r ="100"></Circle>
                </Svg>
                <Praytime>{item.time}</Praytime>
              </DivCircle>
              <CardP>{item.title}</CardP>
            </Card>
          )
        })}
      </Cards>
    </section>
  )     
}

export default Pray;