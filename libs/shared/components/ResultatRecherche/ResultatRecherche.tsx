import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledResultatRecherche = styled.div`
  color: pink;
`;

export function ResultatRecherche() {
  return (
    <StyledResultatRecherche>
      <h1>Welcome to ResultatRecherche!</h1>

      <ul>
        <li>
          <Link to="/">ResultatRecherche root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the ResultatRecherche root route.</div>}
      />
    </StyledResultatRecherche>
  );
}

export default ResultatRecherche;
