import React from 'react'
import ParticlesBg from '../components/ParticlesBg';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
<section className='hero'>
<div className='heroContainer'>
            <ParticlesBg/>
            <div className='heroImage'>

            </div>
            <div className='heroTitle'>
              Startup Weekend Jaipur
            </div>
        </div>
      <div className='first'>
        <div className='img1'>

        </div>
        <div className='text1'>
          <div className='heroBox'>
         <div className='heroBoxTitle'><h1>Lorem Ipsum Dolor</h1></div>
         <div><p>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor Lorem Ipsum Dolor</p></div>
        </div>

        </div>
      </div>
      <div className='three'>
        <div className='text2'>
        <div className='heroBox'>
         <div className='heroBoxTitle'><h1>Lorem Ipsum Dolor</h1></div>
         <div><p>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor Lorem Ipsum Dolor</p></div>
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
         <div className='heroBoxTitle'><h1>Lorem Ipsum Dolor</h1></div>
         <div><p>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor Lorem Ipsum Dolor</p></div>
        </div>
        </div>
      </div>
</section>
         
  )
}

export default Home