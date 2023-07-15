import React from 'react'
import UncontrolledExample from '../components/Carousel';
import TheBox from '../components/TheBox';
import Particle from '../components/ParticlesBg';


const About = () => {
  return (
    <section>
        <div className='bannerAbout'>
        About
        </div>
        <div className="absolute right-0 top-0 left-0 -z-10">
        <Particle/>

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