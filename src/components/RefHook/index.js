import React, { useRef } from "react";

//Refs make it possible to access DOM nodes directly within React.
//This comes in handy in situations where, just as one example, 
//you want to change the child of a component. 
//Let’s say you want to change the value of an <input> element, 
//but without using props or re-rendering the whole component.

//useRef: The useRef is a hook that uses the same ref throughout. 
//It saves its value between re-renders in a functional component and 
//doesn’t create a new instance of the ref for every re-render. 
//It persists the existing ref between re-renders.

//createRef: The createRef is a function that creates a new ref every time. 
//Unlike the useRef, it does not save its value between re-renders, 
//instead creates a new instance of the ref for every re-render. 
//Thus implying that it does not persist the existing ref between re-renders.
const RefHook = () => {
    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value =
            "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    };
    return (
        <div>
            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />
            <textarea ref={focusPoint} />
        </div>
    )
}

export default RefHook;