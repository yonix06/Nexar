import { render } from '@testing-library/react';

import MenuTop from './MenuTop';

describe('MenuTop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuTop />);
    expect(baseElement).toBeTruthy();
  });
});
