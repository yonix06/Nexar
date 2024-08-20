import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledIGNMap = styled.div`
  color: pink;
`;

export function IGNMap() {
  return (
    <StyledIGNMap>
      <h1>Welcome to IGNMap!</h1>

      <ul>
        <li>
          <Link to="/">IGNMap root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the IGNMap root route.</div>} />
    </StyledIGNMap>
  );
}

export default IGNMap;
