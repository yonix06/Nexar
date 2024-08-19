import { render } from '@testing-library/react';

import OpenStreetMap from './OpenStreetMap';

describe('OpenStreetMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OpenStreetMap />);
    expect(baseElement).toBeTruthy();
  });
});
