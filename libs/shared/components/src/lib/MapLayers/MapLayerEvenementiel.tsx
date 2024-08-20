import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledMapLayerEvenementiel = styled.div`
  color: pink;
`;

export function MapLayerEvenementiel() {
  return (
    <StyledMapLayerEvenementiel>
      <h1>Welcome to MapLayerEvenementiel!</h1>

      <ul>
        <li>
          <Link to="/">MapLayerEvenementiel root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the MapLayerEvenementiel root route.</div>}
      />
    </StyledMapLayerEvenementiel>
  );
}

export default MapLayerEvenementiel;
