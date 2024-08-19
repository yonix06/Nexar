import { render } from '@testing-library/react';

import Brouillons from './page';

describe('Brouillons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Brouillons />);
    expect(baseElement).toBeTruthy();
  });
});
