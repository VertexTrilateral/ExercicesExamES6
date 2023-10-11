import React, {useState} from 'react';
import './Compteur.css';

const Compteur = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div className="compteur">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Augmenter</button>
            <button onClick={() => setCount(count - 1)}>Réduire</button>
        </div>
    );
};

export default Compteur;