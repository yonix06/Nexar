import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledHorizontal = styled.div`
  color: pink;
`;

export function Horizontal() {
  return (
    <StyledHorizontal>
      <h1>Welcome to Horizontal!</h1>

      <ul>
        <li>
          <Link to="/">Horizontal root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the Horizontal root route.</div>} />
    </StyledHorizontal>
  );
}

export default Horizontal;
