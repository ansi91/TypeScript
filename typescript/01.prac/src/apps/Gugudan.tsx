import React, { useState } from 'react';
import '../App.css';
import { hello, nameType } from '../comonents/Gugudan';
import * as gugudan from '../comonents/Gugudan';

const GugudanMain : React.FC = () => {

// 상태를 관리하기 위해 useState를 사용
  const [danNumber, setDanNumber] = useState<number | null> (null)
  const danArr = Array.from({ length: 9 }, (_, index) => `${index + 1}단`); //_자리 표시자 역할을 한다 Array.from은 주어진 객체를 배열로 반환한다

  // 1단을 제외
  const filteredDanArr = danArr.filter(dan => dan !== '1단');

  function danEvent(v:React.MouseEvent<HTMLButtonElement>){
    
  const value : number = parseInt(v.currentTarget.value) // 버튼의 value 속성에서 문자열을 가져오고, 이를 숫자로 변환

    
    setDanNumber(value+1)
    
  }
  
  const multiple = danNumber !== null ? gugudan.gugudan(danNumber) : ''; // danNumber가 null이 아닌 경우 gugudan 함수 호출 null 체크 안하면 에러남
  
  const result = multiple.split('\n')
  
  
  
  return(
    <div className="gugudan-container">
    
      
       {filteredDanArr.map((obj,index)=>(
        <button className="dan" value={index+1} onClick={danEvent}>{obj}</button>
       ))}
       <ul className="gugudan-list">
          {result.map((item)=>(
              <li>{item}</li>
         ))}
      </ul>
      
    </div>
  )
}

export default GugudanMain;
