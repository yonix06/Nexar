import { render } from '@testing-library/react';

import SQLQuery from './SQLQuery';

describe('SQLQuery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SQLQuery />);
    expect(baseElement).toBeTruthy();
  });
});
