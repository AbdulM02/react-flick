import React, {useState} from 'react';
import './Range.css'
import StartButton from './StartButton';
import Target from './Target';

const Range = (props) => {

    const[targetVisible, setTargetVisible] = useState(false);
    const[startVisible, setStartVisible] = useState(true);

    const displayTarget = () => {
        setStartVisible(false);
        setTargetVisible(true);

        setTimeout(() => {
            setStartVisible(true);
            setTargetVisible(false);
        }, 30 * 1000);
    }

    return(
        <div className='container' onClick={props.shoot}>
            {startVisible ? <StartButton displayTarget={displayTarget} start={props.start}/> : null}
            {targetVisible ? <Target shoot={props.shootTarget}/> : null}
        </div>
    )
}

export default Range;