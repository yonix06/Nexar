import { render } from '@testing-library/react';

import GoogleMap from './GoogleMap';

describe('GoogleMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoogleMap />);
    expect(baseElement).toBeTruthy();
  });
});
