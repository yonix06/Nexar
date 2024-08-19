import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledDownloadDocument = styled.div`
  color: pink;
`;

export function DownloadDocument() {
  return (
    <StyledDownloadDocument>
      <h1>Welcome to DownloadDocument!</h1>

      <ul>
        <li>
          <Link to="/">DownloadDocument root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the DownloadDocument root route.</div>}
      />
    </StyledDownloadDocument>
  );
}

export default DownloadDocument;
