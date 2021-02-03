import React, { useEffect } from "react";

function Modal({ modalContent, closeModal }) {
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 3000);
    });
    return (
        <>
            <p>{modalContent}</p>
        </>
    );
}

export default Modal;
