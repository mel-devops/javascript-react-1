import React from 'react'
import './Main.css'
import './SentenceBuilder'

export const Main = () => {
  return (
    
    <div className='Sentence'>
      <table>

        <thead>   
            <th>Sentence Builder</th>         
        </thead>
        
        <tbody>
            <tr>
              <td>Sentence: the quick brown fox</td>
              <td>
              <button onClick={() => onClick()}>Add Word</button>
              <button onClick={() => onReset()}>Reset</button>
              </td>
            </tr>
        </tbody>

      </table>
    </div>

   

  
  )
}
