import React from 'react'
import { Container } from 'react-bootstrap'
import './howWork.css'
import '../../styles/common.css'
import WorkCard from './WorkCard';
import img_1 from '../../img/app/app-screen-1.png'
import img_2 from '../../img/app/app-screen-2.png'
import img_3 from '../../img/app/app-screen-3.png'
import { Slide } from 'react-awesome-reveal';
const HowWork = () => {
    const cardOpj= [
        {
            order:1,
            num:"01",
            img:img_1,
            headCard:"Tell us what you like (and what not)",
            text:"Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
        },
        {
            order:2,
            num:"02",
            img:img_2,
            headCard:"Approve your weekly meal plan",
            text:"Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes",
        },
        {
            order:1,
            num:"03",
            img:img_3,
            headCard:"Receive meals at convenient time",
            text:"Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
        }
    ]
    return (
        <div className='how-work'>

            <Container>
                <div className='head_comp'>
                    <p className='fs_1-8 color-primary font_rubik'>HOW IT WORKS</p>
                    <h3 className='fs_4-4 fw-bold'>Your daily dose of health in 3 simple steps</h3>
                </div>
                <div className='card-wrapper'>
                    {
                        cardOpj.map(e=>(
                            // <WorkCard order={e.order} num={e.num} img={e.img} headCard={e.headCard} text={e.text}/>
                            <Slide triggerOnce="true" direction={e.order===1?"left":"right"}>
                                <WorkCard order={e.order} num={e.num} img={e.img} headCard={e.headCard} text={e.text}/>
                            </Slide>
                        ))
                    }
                </div>
            </Container>
        </div>
  )
}

export default HowWork