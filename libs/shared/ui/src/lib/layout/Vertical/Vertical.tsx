import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledVertical = styled.div`
  color: pink;
`;

export function Vertical() {
  return (
    <StyledVertical>
      <h1>Welcome to Vertical!</h1>

      <ul>
        <li>
          <Link to="/">Vertical root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the Vertical root route.</div>} />
    </StyledVertical>
  );
}

export default Vertical;
