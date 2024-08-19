import { render } from '@testing-library/react';

import Bouton from './Bouton';

describe('Bouton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bouton />);
    expect(baseElement).toBeTruthy();
  });
});
