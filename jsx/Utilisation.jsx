// 2. App.js - Exemple d'utilisation

import React, { useState } from 'react';
import Modal from './Modal';
import './Modal.css';

function App() {
    const [isModalOpen, setisModalOpen] = useState(false);

    return (
        <div>
            <h1>Bienvenue</h1>
            <button onClick={() => setisModalOpen(true)}>Ouvrir la modale</button>

            <modal isOpen={isModalOpen} onClose={() => setisModalOpen(false)}>
                <h2>Contenu de la modale</h2>
                <p>Ceci est un texte dans la modale !</p>
            </modal>
        </div>
    );
}

export default App;