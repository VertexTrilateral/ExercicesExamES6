import React, {useState} from 'react';
import Calculatrice from './components/Calculatrice';
import Compteur from './components/Compteur';
import './App.css';

//EXERCICE 1 DE L'EXAMEN REACT, CREATION D'UNE CLASSE PERSONNE:
//-------------------------------------------------------------
class Personne {
  constructor(nom, prenom, age) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
  }
 sePresenter() {
      return `Bonjour, je m'appelle ${this.prenom} ${this.nom} j'ai ${this.age} ans et toutes mes dents !`;
  }
};

//EXERCICE 2 DE L'EXAMEN REACT, CREATION D'UNE CLASSE POUR CALCULER LA SUPERFICIE ET LE PERIMETRE D'UN RECTANGLE:
//---------------------------------------------------------------------------------------------------------------
class Rectangle {
  constructor(longueur, largeur) {
      this.longueur = longueur;
      this.largeur = largeur;
  }
  superficie() {
      return this.longueur * this.largeur;
  }
  perimetre() {
      return (this.longueur + this.largeur) * 2;
  }
};

//EXERCICE 3 DE L'EXAMEN REACT, CREATION D'UNE CLASSE COMPTE BANCAIRE POUR INITALISER LE SOLDE D'UN COMPTE POUR UN PARTICULIER, FAIRE DES DÉPÔTS ET RETRAITS:
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
class CompteBancaire {
  constructor(titulaire, solde = 0) {
    this.titulaire = titulaire;
    this.solde = solde;
  }
  titulaireCpt(titulaire) {
    this.titulaire = titulaire;
  }
  deposerCtp(montant) {
    this.solde += montant;
  }
  retirerCpt(montant) {
    if(montant <= this.solde) {
      this.solde -= montant;
    } else {
      return "Votre Solde est insuffisant pour ce retrait veuillez corriger votre montant";
    }
  }
  soldeCpt() {
    return `Votre solde ${this.titulaire} est de ${this.solde} $`;
  }
  
}

const App = () => {
  const [currentExo, setCurrentEx] = useState(null);

  //EXERCICE 1:
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");

  const personne = new Personne(nom, prenom, age);
  const presentation = personne.sePresenter();

  //EXERCICE 2:
  const [longueur, setLongueur] = useState("");
  const [largeur, setLargeur] = useState("");

  const rectangle1 = new Rectangle(longueur, largeur);
  const superficie = rectangle1.superficie();
  const perimetre = rectangle1.perimetre();

  //EXERCICE 3:
  const [titulaire, setTitulaire] = useState("");
  const [solde, setSolde] = useState(1000);
  const [montantDepot, setMontantDepot] = useState(0);
  const [montantRetrait, setMontantRetrait] = useState(0);
  const compte = new CompteBancaire(titulaire, solde);
  const soldeMessage = compte.soldeCpt();


  const faireDepot = () => {
    const compte = new CompteBancaire(titulaire, solde);
    compte.deposerCtp(Number(montantDepot));
    setSolde(compte.solde);
  };
  const faireRetrait = () => {
    const compte = new CompteBancaire(titulaire, solde);
    const insuffisant = compte.retirerCpt(Number(montantRetrait));
    if (insuffisant) {
      alert(insuffisant);
    }
    setSolde(compte.solde);
  };

  return (
    <div className="App">
      <div className="Exercice1">
        <h2>Exercice1: Nom et Âge</h2>
          <input type="text" placeholder="Nom" onChange={(e) => setNom(e.target.value)} />
          <input type="text" placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)} />
          <input type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
          <h3>{presentation}</h3>
      </div>
      <div className="Exercice2">
        <h2>Exercice2: Le Rectangle et les calculs demandés</h2>
          <input type="number" placeholder="Longueur" value={longueur} onChange={(e) => setLongueur(e.target.value)} />
          <input type="number" placeholder="Largeur" value={largeur} onChange={(e) => setLargeur(e.target.value)} />
          <h3>Superficie: {superficie}</h3>
          <h3>Périmètre: {perimetre}</h3>
      </div>
      <div className="Exercice3">
        <h2>Exercice3: Le compte Bancaire avec un Solde de 1 000$, faites vos dépôts et retraits</h2>
          <input type="text" placeholder="Titulaire" value={titulaire} onChange={(e) => setTitulaire(e.target.value)} />
          <input type="number" placeholder="Solde" value={solde} onChange={(e) => setSolde(e.target.value)} />
          <input type="number" placeholder="Montant Dépot" value={montantDepot} onChange={(e) => setMontantDepot(e.target.value)} />
          <button onClick={faireDepot}>Dépot</button>
          <input type="number" placeholder="Montant Retrait" value={montantRetrait} onChange={(e) => setMontantRetrait(e.target.value)} />
          <button onClick={faireRetrait}>Retrait</button>
          <h3>{soldeMessage}</h3>
      </div>
      <div className="exercices 4et5">
        <h1>Exercice 4 ou Exercice 5</h1>
        <button onClick={() => setCurrentEx(4)}>Exercice 4 (Compteur) </button>
        <button onClick={() => setCurrentEx(5)}>Exercice 5 (Calculatrice) </button>

        {currentExo === 4 && <Compteur />}
        {currentExo === 5 && <Calculatrice />}
      </div>
    </div>
  );
};

export default App;
      
