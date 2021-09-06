import React from 'react';
import './App.css';
import Emoji from './Emoji';


let Card = ()=>{
    return(
<main>
    <div className="outerdiv">
    <Emoji 
    x = {'😄'}
    y = {'😄'}
    z = {'😄'}
  />
  
    <Emoji 
    x = {'😸'}
    y = {'😄'}
    z = {'😄'}
  />
    <Emoji 
    x = {'😸'}
    y = {'😈'}
    z = {'😄'}
  />
    <Emoji 
    x = {'😈'}
    y = {'😈'}
    z = {'😈'}
  />
    </div>
</main>
    );
}

export default Card;