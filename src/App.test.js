import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import getData from './apiRequests/middleware' 

jest.mock('axios')

test('renders app', () => {
  render(<App />);
  const header = screen.getByText(/ich bin ein berliner/i);
  expect(header).toBeInTheDocument();
});

describe('Axios', () => {
  const mockData = { title: "Gender", totalLabel: 100, data: [{ value: 40, label: "Women"}, {value: 50, label: "men"}] }
  jest.fn()

  beforeEach(() => {
    axios.get.mockImplementation(() => Promise.resolve(mockData));
  })

  it('Check axios gets called', async () => {

    await getData()
    expect(axios.get).toBeCalled();

  });
})