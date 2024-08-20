import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledOpenStreetMap = styled.div`
  color: pink;
`;

export function OpenStreetMap() {
  return (
    <StyledOpenStreetMap>
      <h1>Welcome to OpenStreetMap!</h1>

      <ul>
        <li>
          <Link to="/">OpenStreetMap root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the OpenStreetMap root route.</div>}
      />
    </StyledOpenStreetMap>
  );
}

export default OpenStreetMap;
