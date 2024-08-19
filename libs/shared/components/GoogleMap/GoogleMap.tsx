import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledGoogleMap = styled.div`
  color: pink;
`;

export function GoogleMap() {
  return (
    <StyledGoogleMap>
      <h1>Welcome to GoogleMap!</h1>

      <ul>
        <li>
          <Link to="/">GoogleMap root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the GoogleMap root route.</div>} />
    </StyledGoogleMap>
  );
}

export default GoogleMap;
