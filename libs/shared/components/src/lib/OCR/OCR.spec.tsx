import { render } from '@testing-library/react';

import OCR from './OCR';

describe('OCR', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OCR />);
    expect(baseElement).toBeTruthy();
  });
});
