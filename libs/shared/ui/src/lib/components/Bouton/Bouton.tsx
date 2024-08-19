import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledBouton = styled.div`
  color: pink;
`;

export function Bouton() {
  return (
    <StyledBouton>
      <h1>Welcome to Bouton!</h1>

      <ul>
        <li>
          <Link to="/">Bouton root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the Bouton root route.</div>} />
    </StyledBouton>
  );
}

export default Bouton;
