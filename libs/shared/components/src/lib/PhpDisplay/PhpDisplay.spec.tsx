import { render } from '@testing-library/react';

import PhpDisplay from './PhpDisplay';

describe('PhpDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhpDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
