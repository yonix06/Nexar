import { render } from '@testing-library/react';

import NouvelArticle from './page';

describe('NouvelArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NouvelArticle />);
    expect(baseElement).toBeTruthy();
  });
});
