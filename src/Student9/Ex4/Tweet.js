import React from "react";

export const Tweet = ({message, click}) => {

  return (
    
<div>

    {message}
    <button onClick = { ( ) => click("like")} >Like</button>
   
</div>

  );
};