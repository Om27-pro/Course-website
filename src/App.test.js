import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

test('renders Home hero headline and CTA', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const headline = screen.getByText(/Drive Your/i);
  expect(headline).toBeInTheDocument();

  const ctaButton = screen.getByText(/Explore Cars/i);
  expect(ctaButton).toBeInTheDocument();
});
