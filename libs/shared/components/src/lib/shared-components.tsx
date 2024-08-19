import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledSharedComponents = styled.div`
  color: pink;
`;

export function SharedComponents() {
  return (
    <StyledSharedComponents>
      <h1>Welcome to SharedComponents!</h1>

      <ul>
        <li>
          <Link to="/">
            libs/shared/components/src/lib/shared-components root
          </Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>
            This is the libs/shared/components/src/lib/shared-components root
            route.
          </div>
        }
      />
    </StyledSharedComponents>
  );
}

export default SharedComponents;
