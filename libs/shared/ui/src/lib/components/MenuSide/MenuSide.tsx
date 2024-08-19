import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledMenuSide = styled.div`
  color: pink;
`;

export function MenuSide() {
  return (
    <StyledMenuSide>
      <h1>Welcome to MenuSide!</h1>

      <ul>
        <li>
          <Link to="/">MenuSide root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the MenuSide root route.</div>} />
    </StyledMenuSide>
  );
}

export default MenuSide;
