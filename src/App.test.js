import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AERA Gas Control Systems heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1, name: /AERA Gas Control Systems Pvt. Ltd./i });
  expect(headingElement).toBeInTheDocument();
});

test('renders View Our Products button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/View Our Products/i);
  expect(buttonElement).toBeInTheDocument();
});
