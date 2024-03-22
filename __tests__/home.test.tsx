import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

test('HomePage', () => {
  render(<HomePage />); // Arrange

  const heading = screen.getByRole('heading', { name: /home/i }); // Act

  expect(heading).toBeDefined(); // Assert
})