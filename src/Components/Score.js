import React from 'react';
import './Score.css';

const Score = (props) => {
    return(
        <div className='Score'>
            <h2>Targets Hit: {props.shotsHit}</h2>
            <h2>Accuracy: {props.shotsFired === 0 ? 0 : Math.floor(props.shotsHit / props.shotsFired * 100)}</h2>
        </div>
    )
}

export default Score;