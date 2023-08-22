import React, { useEffect, useRef } from 'react'
import './workCard.css'
import { Slide } from 'react-awesome-reveal'
const WorkCard = ({order,num,text,img,headCard}) => {
    const card = useRef(null)
    useEffect(()=>{
        if(order === 2){
            card.current.classList.add("active")
        }
    })
    return (
        <div ref={card} className='card_wrapper d-flex align-items-center justify-content-center'>
                <div className="card-desc">
                    <span className='num'>{num}</span>
                    <h4 className='headCard fs_3-6'>{headCard}</h4>
                    <p className='cardText fs_1-8 fw-bold'>{text}</p>
                </div>
                <div className="card-img"><img src={img}/></div>
        </div>
   )
}

export default WorkCard