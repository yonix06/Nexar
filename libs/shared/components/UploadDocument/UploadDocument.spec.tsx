import { render } from '@testing-library/react';

import UploadDocument from './UploadDocument';

describe('UploadDocument', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UploadDocument />);
    expect(baseElement).toBeTruthy();
  });
});
