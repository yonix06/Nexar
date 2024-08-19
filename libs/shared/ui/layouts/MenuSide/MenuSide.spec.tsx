import { render } from '@testing-library/react';

import MenuSide from './MenuSide';

describe('MenuSide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuSide />);
    expect(baseElement).toBeTruthy();
  });
});
