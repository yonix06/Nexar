import { render } from '@testing-library/react';

import ResultatRecherche from './ResultatRecherche';

describe('ResultatRecherche', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResultatRecherche />);
    expect(baseElement).toBeTruthy();
  });
});
