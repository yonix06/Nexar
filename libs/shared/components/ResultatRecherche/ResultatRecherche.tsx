import { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledResultatRecherche = styled.div`
  color: pink;
`;

const StyledResultatRechercheGrille = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const StyledResultatRechercheListe = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export function ResultatRecherche({ results }) {
  const [affichage, setAffichage] = useState('grille');

  return (
    <StyledResultatRecherche>
      <h1>Welcome to ResultatRecherche!</h1>

      <ul>
        <li>
          <Link to="/">ResultatRecherche root</Link>
        </li>
      </ul>

      <button onClick={() => setAffichage('grille')}>Affichage grille</button>
      <button onClick={() => setAffichage('liste')}>Affichage liste</button>

      {affichage === 'grille' && (
        <StyledResultatRechercheGrille>
          {results.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </StyledResultatRechercheGrille>
      )}

      {affichage === 'liste' && (
        <StyledResultatRechercheListe>
          {results.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </StyledResultatRechercheListe>
      )}
    </StyledResultatRecherche>
  );
}

export default ResultatRecherche;

