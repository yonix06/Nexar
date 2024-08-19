import { render } from '@testing-library/react';

import DerniersArticles from './page';

describe('DerniersArticles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DerniersArticles />);
    expect(baseElement).toBeTruthy();
  });
});
