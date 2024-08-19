import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledEnvoiMail = styled.div`
  color: pink;
`;

export function EnvoiMail() {
  return (
    <StyledEnvoiMail>
      <h1>Welcome to EnvoiMail!</h1>

      <ul>
        <li>
          <Link to="/">EnvoiMail root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the EnvoiMail root route.</div>} />
    </StyledEnvoiMail>
  );
}

export default EnvoiMail;
