import { render } from '@testing-library/react';

import DbArrete from './db-arrete';

describe('DbArrete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DbArrete />);
    expect(baseElement).toBeTruthy();
  });
});
