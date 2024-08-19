import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledRecherche = styled.div`
  color: pink;
`;

export function Recherche() {
  return (
    <StyledRecherche>
      <h1>Welcome to Recherche!</h1>

      <ul>
        <li>
          <Link to="/">Recherche root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the Recherche root route.</div>} />
    </StyledRecherche>
  );
}

export default Recherche;
