import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledMapLayerEdition = styled.div`
  color: pink;
`;

export function MapLayerEdition() {
  return (
    <StyledMapLayerEdition>
      <h1>Welcome to MapLayerEdition!</h1>

      <ul>
        <li>
          <Link to="/">MapLayerEdition root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the MapLayerEdition root route.</div>}
      />
    </StyledMapLayerEdition>
  );
}

export default MapLayerEdition;
