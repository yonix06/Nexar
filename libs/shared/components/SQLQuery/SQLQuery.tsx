import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledSQLQuery = styled.div`
  color: pink;
`;

export function SQLQuery() {
  return (
    <StyledSQLQuery>
      <h1>Welcome to SQLQuery!</h1>

      <ul>
        <li>
          <Link to="/">SQLQuery root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the SQLQuery root route.</div>} />
    </StyledSQLQuery>
  );
}

export default SQLQuery;
