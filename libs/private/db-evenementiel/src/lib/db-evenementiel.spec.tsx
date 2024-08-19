import { render } from '@testing-library/react';

import DbEvenementiel from './db-evenementiel';

describe('DbEvenementiel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DbEvenementiel />);
    expect(baseElement).toBeTruthy();
  });
});
