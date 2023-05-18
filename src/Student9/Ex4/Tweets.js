import React from 'react'

import { Tweet } from './Tweet'

export const Tweets = () => {
  return (
    <div>
        <div className="Main">
            <div class="header"> Tweet Storm</div>
            <div class="green"> <Tweet  message="It's payday!!!" color ="green"/> </div>
            <div class="yellow"><Tweet className = "yellow" message="I just bought a new car!" /></div>
            <div class="red"><Tweet className = "red" message="I just smashed my new car." /></div>
        
    
</div>
    </div>
  )
}