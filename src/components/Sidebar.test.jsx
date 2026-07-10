import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
  it('renders correctly with expected elements', () => {
    render(<Sidebar />);

    // Check for required brand texts
    expect(screen.getByText('EVOLVE OPERATIONAL SUITE (OS)')).toBeInTheDocument();
    expect(screen.getByText('MD A SHAIKH POWERED')).toBeInTheDocument();

    // Check for image with alt "Evolve Logo"
    const logo = screen.getByAltText('Evolve Logo');
    expect(logo).toBeInTheDocument();

    // Test the onError handler for the logo image
    expect(logo.style.display).not.toBe('none');
    fireEvent.error(logo);
    expect(logo.style.display).toBe('none');

    // Check for navigation links
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });
});
