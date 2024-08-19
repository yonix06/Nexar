import { render } from '@testing-library/react';

import Vertical from './Vertical';

describe('Vertical', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Vertical />);
    expect(baseElement).toBeTruthy();
  });
});
