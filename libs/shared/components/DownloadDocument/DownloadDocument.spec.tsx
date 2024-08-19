import { render } from '@testing-library/react';

import DownloadDocument from './DownloadDocument';

describe('DownloadDocument', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DownloadDocument />);
    expect(baseElement).toBeTruthy();
  });
});
