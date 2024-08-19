import { render } from '@testing-library/react';

import MapLayerEvenementiel from './MapLayerEvenementiel';

describe('MapLayerEvenementiel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapLayerEvenementiel />);
    expect(baseElement).toBeTruthy();
  });
});
