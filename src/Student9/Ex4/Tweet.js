import React from "react";

export const Tweet = ({message, clickHandler}) => {
  return (
<div>
    {message}
    <button onClick = { () => clickHandler()} >Like</button>  
   
</div>
  
  );
};
