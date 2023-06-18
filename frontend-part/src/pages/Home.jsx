import React from 'react'
import ParticlesBg from '../components/ParticlesBg';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
<section className='hero'>
<div className='heroContainer'>
        <div className='swjTitle'>
        A three-day collaborative and creative workshop
        </div>
        </div>
        <div className='homePageStuff'>
          <div className='homePageInnerStuff'>
      <div className='first'>
        <div className='img1'>

        </div>
        <div className='text1'>
          <div className='heroBox'>
         <div className='heroBoxTitle'><h1>Day 1</h1></div>
         <div><p>
         Began with a motivational speech from a professional in the field, laying the groundwork for the upcoming entrepreneurial journey. The event "Break the Ice" promoted a lively environment for participants to network, form teams, and make contacts with others
          </p></div>
        </div>

        </div>
      </div>
      <div className='three'>
        <div className='text2'>
        <div className='heroBox'>
         <div className='heroBoxTitle'><h1>Day 2</h1></div>
         <div><p>Participants delved into the heart of startup development. Teams developed company models, tactics, and plans with the help of mentors, resulting in improved ideas and plans due to productive interactions, constructive feedback sessions, and insightful observations.</p></div>
        </div>
        </div>
        <div className='img2'>

        </div>
      </div>
      <div className='first'>
        <div className='img3'>

        </div>
        <div className='text3'>
        <div className='heroBox'>
         <div className='heroBoxTitle'><h1>Day 3</h1></div>
         <div><p>Idea submission, pitching, and results announcement marked the event's conclusion. Teams presented their concepts to judges, who assessed them for viability, inventiveness, and success potential. Participants were enthusiastic and ingenious, and their enthusiasm and energy was evident.</p></div>
        </div>
        </div>
      </div>
      </div>
      </div>
</section>
         
  )
}

export default Home