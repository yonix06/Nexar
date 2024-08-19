import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledFichiersArrete = styled.div`
  color: pink;
`;

export function FichiersArrete() {
  return (
    <StyledFichiersArrete>
      <h1>Welcome to FichiersArrete!</h1>

      <ul>
        <li>
          <Link to="/">
            libs/private/fichiers-arrete/src/lib/fichiers-arrete root
          </Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>
            This is the libs/private/fichiers-arrete/src/lib/fichiers-arrete
            root route.
          </div>
        }
      />
    </StyledFichiersArrete>
  );
}

export default FichiersArrete;
