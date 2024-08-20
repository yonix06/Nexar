import { render } from '@testing-library/react';

import MapLayerSentiers from './MapLayerSentiers';

describe('MapLayerSentiers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapLayerSentiers />);
    expect(baseElement).toBeTruthy();
  });
});
