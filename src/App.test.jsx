import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders specific elements like EVOLVE OPERATIONAL SUITE (OS)', () => {
    render(<App />);
    const headingElements = screen.getAllByText(/EVOLVE OPERATIONAL SUITE \(OS\)/i);
    expect(headingElements.length).toBeGreaterThan(0);
    expect(headingElements[0]).toBeInTheDocument();
  });
});
