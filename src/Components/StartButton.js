import React, {useState} from 'react';
import './StartButton.css'

const StartButton = (props) => {
    const [text, setText] = useState("START");

    const start = () => {
        if(text !== "START") {
            return;
        }
        let remainingTime = 3;
        setText(remainingTime);
        remainingTime--;
        const countdown = setInterval(() => {
            if(remainingTime === 0) {
                clearInterval(countdown);
                props.displayTarget();
                props.start();
            }
            setText(remainingTime);
            remainingTime -= 1;
        }, 1000);
    }

    return(
        <button 
            onClick={start} 
            style={{
                display: text === 0 ? 'none' : 'inline', 
                backgroundColor: text === 3 ? 'red' : text === 2 ? 'yellow' : text === 1 ? 'rgb(4, 198, 13)' : 'lightblue'}}>
            {text}
        </button>
    )
}

export default StartButton;