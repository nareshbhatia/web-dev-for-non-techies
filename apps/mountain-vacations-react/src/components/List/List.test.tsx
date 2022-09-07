import { render, screen } from '../../test/test-utils';
import { List } from './List';

describe('<List />', () => {
  test('renders correctly', () => {
    render(<List>List</List>);
    expect(screen.getByText('List')).toBeInTheDocument();
  });
});
