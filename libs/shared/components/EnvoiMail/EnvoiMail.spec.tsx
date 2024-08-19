import { render } from '@testing-library/react';

import EnvoiMail from './EnvoiMail';

describe('EnvoiMail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EnvoiMail />);
    expect(baseElement).toBeTruthy();
  });
});
