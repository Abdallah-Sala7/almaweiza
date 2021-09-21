import axios from "axios";
import React, {Fragment, useEffect, useState } from "react";
import {Ayat,AyatP,Surah,SurhasContainer,Oppen,Xclose} from './styled.js'

function Quran() {

  const [surah, setSurah] = useState([])
  const [ayahs, setayahs] = useState([])

  useEffect(()=>{
    axios
    .get("http://api.alquran.cloud/v1/meta")
    .then(res =>{setSurah(res.data.data.surahs.references)})

  },[])

  const oppenSurah =(x)=>{
    document.querySelector('.oppen').classList.add('active');
    axios
    .get(`http://api.alquran.cloud/v1/surah/${x}`)
    .then(res =>{setayahs(res.data.data.ayahs)})
  }

  const close =(x)=>{
    document.querySelector('.oppen').classList.remove('active');
  }
  
  return (
    <Fragment>
      <section >
        <h3>الْقُرْآن الْكَرِيْم</h3>

        <SurhasContainer>
          {surah.map(item =>{
            return(
              <Surah key={item.number} onClick={()=>{oppenSurah(item.number)}}>
                  <p>{item.name}</p>
                  <p>{item.englishName}</p>
              </Surah>
            )})}
        </SurhasContainer>

      </section>
      <Oppen className='oppen'>
        <Xclose className='x-close' onClick={close}>x</Xclose>

        <Ayat>
          {ayahs.map(item =>{
              return(
                <AyatP key={item.numberInSurah}> {item.text} -{item.numberInSurah}-</AyatP>
              )
          })}
        </Ayat>

      </Oppen>
  </Fragment>
  )
}
export default Quran;