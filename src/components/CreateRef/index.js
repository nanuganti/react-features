import React from "react";
const CreateRef = () => {
    const inputText = React.createRef();

    const foucusOnTextArea = () => {
        inputText.current.value = "some sample text";
        inputText.current.focus();
    }
    return (
        <div>
            <h1>CreateRef</h1>
            <div>
                <button onClick={foucusOnTextArea}>CreateRef</button>
                <div>
                    <textarea ref={inputText} />
                </div>
            </div>
        </div>
    )
}

export default CreateRef;