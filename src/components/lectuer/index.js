import axios from "axios";
import React,{useState,useEffect}from "react";
import {Lec,LecImgs,Right,Iframe,LecText,LectureCont,Left} from './styled.js'

function Lectuer() {

  const [lec, setlec] = useState([])
  useEffect(() => {
    axios
    .get('js/lec.json')
    .then(res =>(setlec(res.data.lectuers)))
  }, [])

  return (
    <section>
      <h3>محاضرات</h3>
      <LectureCont>
          <Right>
              {
                lec.map(item =>{
                  return(
                    <Lec href={item.lecLinke} key={item.lecId}>
                        <LecText>
                            <h4>{item.lectitle}</h4>
                            <p>{item.lectdesc}</p>
                        </LecText>
                        <LecImgs src={item.lecimg} alt="" />
                    </Lec>
                  )
                })
              }
          </Right>
          <Left>
              <Iframe src="https://www.youtube.com/embed/631L-aGzfAE" frameBorder="0"></Iframe>
              <p>محاضرة شيقة من تقديم فضيلة الشيخ حازم شومان</p>
          </Left>
      </LectureCont>
    </section>
  )
}

export default Lectuer;