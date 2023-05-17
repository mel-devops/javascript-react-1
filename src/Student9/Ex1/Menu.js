import React from 'react'
import './Menu.css'

export const Menu = () => {
    return (
      <div class="Menu">
       <h1>Menu</h1>
       
          <div class="Food"> 
          <h2>Food</h2>
         <hr/>
         <p>Hamburger ...$1.00</p>
         <p>Chesseburger...$1.00</p>
         <p>Hot Dog...$1.00</p>
         <p>Fries...$1.00</p>
          </div>

        <div class="Drink">
        <h2>Drink</h2>
          <hr/>
        <p>Coffee...$1.00</p>
         <p>Tea...$1.00</p>
         <p>Milk...$1.00</p>
         <p>Coke...$1.00</p>
        </div>

        
         <div class="Dessert">
         <h2>Dessert</h2>
         <hr/>
         <p>Chocolate Pie...$1.00</p>
         <p>Apple Pie...$1.00</p>
         <p>Cannoli...$1.00</p>

      
         
         </div>
        
      </div>
    )
  }