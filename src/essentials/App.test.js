import {render, screen} from '@testing-library/react';
import EssentialsApp from './EssentialsApp';

test('renders learn react link', () => {
  render(<EssentialsApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
