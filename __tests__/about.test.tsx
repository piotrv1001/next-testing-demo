import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import AboutPage from "@/app/about/page";

test("AboutPage", () => {
  render(<AboutPage />);

  const heading = screen.getByRole("heading", { name: /about page/i });

  expect(heading).toBeDefined();
})