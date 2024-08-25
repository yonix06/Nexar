import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledMapLayerSentiers = styled.div`
  color: pink;
`;

export function MapLayerSentiers() {
  return (
    <StyledMapLayerSentiers>
      <h1>Welcome to MapLayerSentiers!</h1>

      <ul>
        <li>
          <Link to="/">MapLayerSentiers root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the MapLayerSentiers root route.</div>}
      />
    </StyledMapLayerSentiers>
  );
}

export default MapLayerSentiers;
