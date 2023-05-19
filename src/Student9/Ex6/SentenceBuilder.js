import React from 'react';
import { useState, useRef } from 'react';

import './Main.css';
import'./Main.js';

const SentenceBuilder = (props) => {
    let inputRef = useRef(null); // <== Use case #1: Using a Ref as a handle to an html element in this component.
    let initialValue = useRef(props.initialValue); // <== Use case #2: Using Ref as a private instance variable in this component.
    let [counter, setCounter] = useState(props.initialValue); 

    const onClick = () => {
        setCounter(++counter); // <== Increment the value of counter, then use it, then set the counter state.
    }

    const onReset = () => {
        setCounter(initialValue.current); // <== MUST use the .current property to retrieve the actual value of this variable.
    }

    const onChange = (inputText) => {
        setCounter(inputText); // <== Its up to us to implement data binding from the UI to the model (unlike Angular 2-way data binding).
    }

    return (
        <div className="SentenceBuilder">
            <button onClick={() => onClick()}>Add Word</button>
            <button onClick={() => onReset()}>Reset</button>
            <input ref={inputRef} value={counter} onChange={e => onChange(e.target.value)}></input>
        </div>
    )
}

export default SentenceBuilder;