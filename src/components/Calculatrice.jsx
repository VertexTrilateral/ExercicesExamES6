import React, {useState} from 'react';

const Calculatrice = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultat, setResult] = useState(null);

    const addition = () => {
        setResult(num1 + num2);
    };
    const soustraction = () => {
        setResult(num1 - num2);
    };
    const remiseAzero = () => {
        setNum1(0);
        setNum2(0);
        setResult(null);
    };

    return (
        <div className="calculatrice">
            <h1>Calculatrice</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))}/>
            <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))}/>
            <button onClick={addition}>+</button>
            <button onClick={soustraction}>-</button>
            <button onClick={remiseAzero}>RAZ</button>

            <div className="Resultat"></div>
                <h2>Résultat : {resultat}</h2>
            
        </div>
    );
};

export default Calculatrice;