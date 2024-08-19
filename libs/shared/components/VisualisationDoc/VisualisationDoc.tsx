import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledVisualisationDoc = styled.div`
  color: pink;
`;

export function VisualisationDoc() {
  return (
    <StyledVisualisationDoc>
      <h1>Welcome to VisualisationDoc!</h1>

      <ul>
        <li>
          <Link to="/">VisualisationDoc root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the VisualisationDoc root route.</div>}
      />
    </StyledVisualisationDoc>
  );
}

export default VisualisationDoc;
