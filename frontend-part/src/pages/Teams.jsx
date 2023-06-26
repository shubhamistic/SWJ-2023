import React from 'react'
import TeamCard from '../components/TeamCard'
import Particle from '../components/ParticlesBg'

const Teams = () => {
  return (
    <div>
      <div className="absolute right-0 top-0 left-0 -z-10">
        <Particle/>
       <div className='bannerAbout'>
        Teams
        </div>
        <TeamCard />
        </div>
    </div>
  )
}

export default Teams