import React from 'react';
import './App.css';

let Emoji = (props)=>{
    let {x,y,z} = props;
    if(x === y && y===z)
    {
    return(
<div className="innerDiv">
    <p>{`${x} ${y} ${z}`}</p>
    <p>🎰 This is Matching 🎰</p>
</div>
    );
    }
    else{
        return(
            <div className="innerDiv">
    <p>{`${x} ${y} ${z}`}</p>
    <p>🎰 This is Not Matching 🎰</p>
</div>
        );
    }
}

export default Emoji;