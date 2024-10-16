import React from 'react'
import TeamHeader from '../components/TeamHeader'
import TeamLeader from '../components/TeamLeader'
import Contact from '../components/Contact'

function Team() {
  return (
    <div className='team'>
      <TeamHeader/>
      <hr/>
      <TeamLeader/>
      <Contact/>
    </div>
  )
}

export default Team