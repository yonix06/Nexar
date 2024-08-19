import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledFichiersEvenementiel = styled.div`
  color: pink;
`;

export function FichiersEvenementiel() {
  return (
    <StyledFichiersEvenementiel>
      <h1>Welcome to FichiersEvenementiel!</h1>

      <ul>
        <li>
          <Link to="/">
            libs/private/fichiers-evenementiel/src/lib/fichiers-evenementiel
            root
          </Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>
            This is the
            libs/private/fichiers-evenementiel/src/lib/fichiers-evenementiel
            root route.
          </div>
        }
      />
    </StyledFichiersEvenementiel>
  );
}

export default FichiersEvenementiel;
