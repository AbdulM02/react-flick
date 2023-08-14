import React from 'react';
import Timer from './Timer';
import Score from './Score';

const Header = (props) => {
    return(
        <>
            <Timer seconds={props.seconds}/>
            <Score shotsHit={props.shotsHit} shotsFired={props.shotsFired}/>
        </>
    )
}

export default Header;