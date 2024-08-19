import { render } from '@testing-library/react';

import Consultation from './Consultation';

describe('Consultation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Consultation />);
    expect(baseElement).toBeTruthy();
  });
});
