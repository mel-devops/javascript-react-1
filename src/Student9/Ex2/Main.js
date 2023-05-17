import React from 'react'
import './Main.css'
import {Footer} from  './Footer'
import {Header} from  './Header'
import {Nav} from './Nav' 
import {Body} from './Body'

export const Main = () => {
  return (
    <div className='Main'>
      <Header/>
      <Nav/>
      <Body/>
      <Footer/>
    
        
    </div>
  )
}
