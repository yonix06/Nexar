import { render } from '@testing-library/react';

import FichiersEvenementiel from './fichiers-evenementiel';

describe('FichiersEvenementiel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FichiersEvenementiel />);
    expect(baseElement).toBeTruthy();
  });
});
