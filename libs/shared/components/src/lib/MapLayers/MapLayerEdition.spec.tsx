import { render } from '@testing-library/react';

import MapLayerEdition from './MapLayerEdition';

describe('MapLayerEdition', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapLayerEdition />);
    expect(baseElement).toBeTruthy();
  });
});
