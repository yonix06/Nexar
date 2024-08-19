import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledMapLayer = styled.div`
  color: pink;
`;

export function MapLayer() {
  return (
    <StyledMapLayer>
      <h1>Welcome to MapLayer!</h1>

      <ul>
        <li>
          <Link to="/">MapLayer root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the MapLayer root route.</div>} />
    </StyledMapLayer>
  );
}

export default MapLayer;
