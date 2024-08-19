import { render } from '@testing-library/react';

import MapLayerArretes from './MapLayerArretes';

describe('MapLayerArretes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapLayerArretes />);
    expect(baseElement).toBeTruthy();
  });
});
