import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
  it('renders without crashing', () => {
    render(<Sidebar />);
  });

  it('contains the required global brand texts', () => {
    render(<Sidebar />);
    expect(screen.getByText('EVOLVE OPERATIONAL SUITE (OS)')).toBeInTheDocument();
    expect(screen.getByText('MD A SHAIKH POWERED')).toBeInTheDocument();
  });

  it('contains the navigation links', () => {
    render(<Sidebar />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('contains the Evolve logo', () => {
    render(<Sidebar />);
    const logo = screen.getByAltText('Evolve Logo');
    expect(logo).toBeInTheDocument();
  });
});
