import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledEditionDocument = styled.div`
  color: pink;
`;

export function EditionDocument() {
  return (
    <StyledEditionDocument>
      <h1>Welcome to EditionDocument!</h1>

      <ul>
        <li>
          <Link to="/">EditionDocument root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the EditionDocument root route.</div>}
      />
    </StyledEditionDocument>
  );
}

export default EditionDocument;
