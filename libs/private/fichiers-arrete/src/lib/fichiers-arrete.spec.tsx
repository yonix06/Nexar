import { render } from '@testing-library/react';

import FichiersArrete from './fichiers-arrete';

describe('FichiersArrete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FichiersArrete />);
    expect(baseElement).toBeTruthy();
  });
});
