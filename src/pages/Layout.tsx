import React from 'react'
import Landing from './Landing'
import Aboutinfo from './Aboutinfo'
import Skill from './Skill'
import Footer from './Footer'

const Layout:React.FC = () => {
  return (
    <div className='bg-E5E5E5 font-roboto bg-[#E5E5E5] '>
      <Landing/>
      <Aboutinfo/>
      <Skill/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default Layout
