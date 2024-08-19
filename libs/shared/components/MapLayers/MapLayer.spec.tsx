import { render } from '@testing-library/react';

import MapLayer from './MapLayer';

describe('MapLayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapLayer />);
    expect(baseElement).toBeTruthy();
  });
});
