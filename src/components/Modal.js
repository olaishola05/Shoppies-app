import React, { useEffect } from "react";
import "../App.css";

function Modal({ modalContent, closeModal }) {
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 1000);
    });

    return (
        <div>
            <p>{modalContent}</p>
        </div>
    );
}

export default Modal;
