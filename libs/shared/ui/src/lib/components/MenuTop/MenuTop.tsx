import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledMenuTop = styled.div`
  color: pink;
`;

export function MenuTop() {
  return (
    <StyledMenuTop>
      <h1>Welcome to MenuTop!</h1>

      <ul>
        <li>
          <Link to="/">MenuTop root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the MenuTop root route.</div>} />
    </StyledMenuTop>
  );
}

export default MenuTop;
