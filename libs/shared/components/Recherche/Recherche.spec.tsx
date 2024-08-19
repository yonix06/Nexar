import { render } from '@testing-library/react';

import Recherche from './Recherche';

describe('Recherche', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Recherche />);
    expect(baseElement).toBeTruthy();
  });
});
