import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledOCR = styled.div`
  color: pink;
`;

export function OCR() {
  return (
    <StyledOCR>
      <h1>Welcome to OCR!</h1>

      <ul>
        <li>
          <Link to="/">OCR root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the OCR root route.</div>} />
    </StyledOCR>
  );
}

export default OCR;
