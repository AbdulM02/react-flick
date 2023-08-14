import React, {useState} from "react";
import './Target.css'

const Target = (props) => {

    const[left, setLeft] = useState(50);
    const[bottom, setBottom] = useState(55);
    

    const handleClick = () => {
        props.shoot();
        setLeft(Math.floor(Math.random() * 85) + 5);
        setBottom(Math.floor(Math.random() * 70) + 15);
    }

    return(
        <button className = 'target' style={{left: `${left}%`, bottom: `${bottom}%`}} onClick={handleClick}></button>
    )
}

export default Target;