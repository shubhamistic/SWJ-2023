import React from 'react'
import UncontrolledExample from '../components/Carousel';
import TheBox from '../components/TheBox';

const About = () => {
  return (
    <section>
        <div className='bannerAbout'>
        About
        </div>
        <div className='about-text'>
          <TheBox/>
        </div>
        <div>
        <UncontrolledExample/>
        </div>  
    </section>
  )
}

export default About