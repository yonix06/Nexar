import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledConsultation = styled.div`
  color: pink;
`;

export function Consultation() {
  return (
    <StyledConsultation>
      <h1>Welcome to Consultation!</h1>

      <ul>
        <li>
          <Link to="/">Consultation root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the Consultation root route.</div>}
      />
    </StyledConsultation>
  );
}

export default Consultation;
