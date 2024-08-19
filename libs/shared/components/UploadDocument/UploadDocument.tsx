import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledUploadDocument = styled.div`
  color: pink;
`;

export function UploadDocument() {
  return (
    <StyledUploadDocument>
      <h1>Welcome to UploadDocument!</h1>

      <ul>
        <li>
          <Link to="/">UploadDocument root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the UploadDocument root route.</div>}
      />
    </StyledUploadDocument>
  );
}

export default UploadDocument;
