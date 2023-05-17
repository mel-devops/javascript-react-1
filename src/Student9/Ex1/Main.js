import React from 'react'
import './Main.css'
import { Menu } from './Menu'
import { Footer } from './Footer'
import {Header} from './Header'
import {Nav} from './Nav'

export const Main = () => {
  return (
    <div className="Main">
   
    <Header/>
    <Nav/>
    <Menu />
    <Footer />
</div>
  )
}