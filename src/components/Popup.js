import React from "react";

const PopUp = props => {
    return (
        <div className="popup__box">
            <div className="popup">
                <p className="popup__error">{props.children}</p>
                <button onClick={props.exitPopUp} className="popup__exit task--button">X</button>
            </div>
        </div>
    )
}

export default PopUp