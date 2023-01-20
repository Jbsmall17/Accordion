import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({value,id,title,info}) => {
    const [answerOut,setAnswerOut] = useState(value)
  return <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setAnswerOut((prev)=>!prev)}>{answerOut?<AiOutlineMinus/>:<AiOutlinePlus />}</button>
            </header>
            {answerOut && <p>{info}</p>}
        </article>;
};

export default Question;