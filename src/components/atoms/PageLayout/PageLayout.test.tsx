import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageLayout } from './PageLayout';

describe('PageLayout', () => {
  it('should render with correct styles', () => {
    const { getByTestId } = render(
      <PageLayout>
        <div>hi</div>
      </PageLayout>
    );

    const classes = "flex flex-col items-center min-h-screen bg-gradient-to-b from-rose-950 to-gray-900 text-white text-2xl font-mono"
    const container = getByTestId('PageLayout');

    expect(container.classList.value).toBe(classes);
  });
})
