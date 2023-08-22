import React from 'react'
import "../../styles/common.css"
import "./sliderClient.css"
import { Container } from 'react-bootstrap'
import logoSlider from '../../img/logos/business-insider.png'
import logoSlider_2 from '../../img/logos/forbes.png'
import logoSlider_3 from '../../img/logos/techcrunch.png'
import logoSlider_4 from '../../img/logos/the-new-york-times.png'
import logoSlider_5 from '../../img/logos/usa-today.png'
const SliderClient = () => {
  const imagesSlider = [logoSlider, logoSlider_2, logoSlider_3, logoSlider_4, logoSlider_5];
  return (
    <div className='client'>
      <Container>
        <h3 className='font_rubik text-center mb-3'>AS FEATURED IN</h3>
        <div className="slider-images d-flex align-items-center">
          {
            imagesSlider.map(img => (
              <img src={img} className='img-slider' />
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default SliderClient