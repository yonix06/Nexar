import { render } from '@testing-library/react';

import EditionDocument from './EditionDocument';

describe('EditionDocument', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditionDocument />);
    expect(baseElement).toBeTruthy();
  });
});
