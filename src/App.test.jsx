import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the layout correctly and contains the required branding text', () => {
    render(<App />);

    // Verify the required branding text is strictly present
    const brandingTextElements = screen.getAllByText(/EVOLVE OPERATIONAL SUITE \(OS\)/i);
    expect(brandingTextElements.length).toBeGreaterThan(0);

    // Verify some placeholders to ensure the main content is rendered
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('System Status')).toBeInTheDocument();
  });
});
