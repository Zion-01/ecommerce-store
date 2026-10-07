import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// App owns its own BrowserRouter, so reset the URL between tests.
beforeEach(() => {
  window.history.pushState({}, '', '/');
});

test('renders the home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /welcome to car center/i })).toBeInTheDocument();
});

test('adding a car from its details page updates the cart count', () => {
  render(<App />);
  expect(screen.getByText('Cart (0)')).toBeInTheDocument();

  fireEvent.click(screen.getAllByText('Products').find((el) => el.classList.contains('navbar-link')));
  fireEvent.click(screen.getAllByText('View Details')[0]);
  expect(screen.getByRole('heading', { name: 'Toyota Camry' })).toBeInTheDocument();

  fireEvent.click(screen.getByText('Add to Cart'));
  expect(screen.getByText('Cart (1)')).toBeInTheDocument();
});

test('checkout redirects to login when not signed in', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Checkout'));
  expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Checkout' })).not.toBeInTheDocument();
});

test('signing in unlocks checkout', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Checkout'));
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'user@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });
  fireEvent.click(screen.getByRole('button', { name: 'Login' }));

  fireEvent.click(screen.getByText('Checkout'));
  expect(screen.getByRole('heading', { name: 'Checkout' })).toBeInTheDocument();
});
