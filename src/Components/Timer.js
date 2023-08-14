import React from 'react';
import './Timer.css';

const Timer = (props) => {
    return(
        <h1>{Math.floor(props.seconds / 60)}:{props.seconds === 60 ? "00" : props.seconds < 10 ? `0${props.seconds}` : props.seconds}</h1>
    )
}

export default Timer;