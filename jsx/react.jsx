// Exemple React: Modale simple

// 1. MOdal.js - Le composant de la modale

import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <>
        <div className="overlay" onclick={onClose}></div>
        <div className="modal">
            <div className="modal-header">
                <button className="close-button" onclick={onClose}>&times;</button>
            </div>
            <div className="modal-body">
                {children}
            </div>
        </div>
        </>
    );
};

export default Modal;



