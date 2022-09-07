import { render, screen } from '../../test/test-utils';
import { DestinationDetail } from './DestinationDetail';

describe('<DestinationDetail />', () => {
  test('renders correctly', () => {
    render(<DestinationDetail>DestinationDetail</DestinationDetail>);
    expect(screen.getByText('DestinationDetail')).toBeInTheDocument();
  });
});
