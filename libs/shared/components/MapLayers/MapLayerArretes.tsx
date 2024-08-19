import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledMapLayerArretes = styled.div`
  color: pink;
`;

export function MapLayerArretes() {
  return (
    <StyledMapLayerArretes>
      <h1>Welcome to MapLayerArretes!</h1>

      <ul>
        <li>
          <Link to="/">MapLayerArretes root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the MapLayerArretes root route.</div>}
      />
    </StyledMapLayerArretes>
  );
}

export default MapLayerArretes;
