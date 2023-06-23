import ResultsView from '../../../components/CompareResults/beta/ResultsView';
import useProtocolTheme from '../../../theme/protocolTheme';
import { renderWithRouter } from '../../utils/setupTests';
import { renderHook, screen } from '../../utils/test-utils';

describe('Results View', () => {
  const protocolTheme = renderHook(() => useProtocolTheme()).result.current
    .protocolTheme;

  it('Should match snapshot', () => {
    renderWithRouter(<ResultsView protocolTheme={protocolTheme} />);

    expect(screen.getByTestId('beta-version-compare-results')).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  });
});