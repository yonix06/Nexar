import { render } from '@testing-library/react';

import IGNMap from './IGNMap';

describe('IGNMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IGNMap />);
    expect(baseElement).toBeTruthy();
  });
});
