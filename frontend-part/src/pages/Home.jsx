import React from 'react';
import FirstSectionImage from "../assets/Celebratory_Marigold.svg";
import UncontrolledExample from '../components/Carousel';
import Particle from '../components/ParticlesBg';

const Home = () => {
  return (
    
    <section className='hero'>
      
      <div>
        <UncontrolledExample/>
        </div>  
        
        <div className="absolute right-0 top-0 left-0 -z-10">
        <Particle/>

      </div>
      <div class="common first">
        <div className='homeWrapper'>
        <div className='homePageText'>
        <h1 className='homePageHeading'>DAY 1.</h1>
        <p className='homePagePara'>Began with a motivational speech from a professional in the field, laying the groundwork for the upcoming entrepreneurial journey. The event "Break the Ice" promoted a lively environment for participants to network, form teams, and make contacts with others.</p>
        </div>
        <div className='homePageImage1'>

        </div>
        </div>
      </div>
      <div class="common second">
      <div className='homeWrapper'>
      <div className='homePageImage2'>

</div>
        <div className='homePageText'>
        <h1 className='homePageHeading'>DAY 2.</h1>
        <p className='homePagePara'>Began with a motivational speech from a professional in the field, laying the groundwork for the upcoming entrepreneurial journey. The event "Break the Ice" promoted a lively environment for participants to network, form teams, and make contacts with others.</p>
        </div>
        
        </div>
    
      </div>
      <div class="common third">
      <div className='homeWrapper'>
        <div className='homePageText'>
        <h1 className='homePageHeading'>DAY 3.</h1>
        <p className='homePagePara'>Began with a motivational speech from a professional in the field, laying the groundwork for the upcoming entrepreneurial journey. The event "Break the Ice" promoted a lively environment for participants to network, form teams, and make contacts with others.</p>
        </div>
        <div className='homePageImage3'>

        </div>
        </div>
    
      </div>
    </section>


  )
}

export default Home;
