import React from 'react'
import { useState } from 'react'
import './Main.css'
import { Tweets } from './Tweets'

export const Main = () => {
  let [counter, setCounter] = useState(0)
    const clickHandler = () => {
      setCounter(counter +1)
    }
    
  return (
   <div>
       <div class="header"> Toltal Likes: {counter}</div>
       <Tweets 
       clickHandler = {clickHandler}/>

    </div>
  )
  
  }
