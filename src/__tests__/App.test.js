import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders component', () => {
  render(<App />);
});

test('renders page title', () => {
  render(<App />);
  const headerElement = screen.getByText(/React App with Jest/i);
  expect(headerElement).toBeInTheDocument();
});

test('display greeting when button is clicked', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Click to greet'), () => {
    expect(screen.getByText('Hahaha')).toBeInTheDocument();
  });
});

test('Check if list component is present in App component', () => {
  const { getByTestId } = render(<App />);
  const listComponent = getByTestId('list-component');
  expect(listComponent).toBeInTheDocument();
});