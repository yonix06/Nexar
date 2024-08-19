import { render } from '@testing-library/react';

import VisualisationDoc from './VisualisationDoc';

describe('VisualisationDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VisualisationDoc />);
    expect(baseElement).toBeTruthy();
  });
});
