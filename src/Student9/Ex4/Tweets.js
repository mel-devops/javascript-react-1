import React from 'react'

import { Tweet } from './Tweet'

export const Tweets = ({clickHandler}) => {
  return (
    <div>
        <div className="Main">
            <div class="green"> <Tweet  message="It's payday!!!" color ="green" clickHandler= {clickHandler}/> </div>
            <div class="yellow"><Tweet className = "yellow" message="I just bought a new car!" clickHandler= {clickHandler} /></div>
            <div class="red"><Tweet className = "red" message="I just smashed my new car." clickHandler= {clickHandler}/></div>
        
    
</div>
    </div>
  )
}
