import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import {ChoiceButton} from "./ChoiceButton.tsx";

describe('ChoiceButton', () => {
  const mockOnClick = vi.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('renders rock button correctly', () => {
    render(<ChoiceButton choice="rock" onClick={mockOnClick} />);
    expect(screen.getByText('Pierre')).toBeInTheDocument();
  });

  it('renders paper button correctly', () => {
    render(<ChoiceButton choice="paper" onClick={mockOnClick} />);
    expect(screen.getByText('Papier')).toBeInTheDocument();
  });

  it('renders scissors button correctly', () => {
    render(<ChoiceButton choice="scissors" onClick={mockOnClick} />);
    expect(screen.getByText('Ciseaux')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    render(<ChoiceButton choice="rock" onClick={mockOnClick} />);
    fireEvent.click(screen.getByText('Pierre'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    render(<ChoiceButton choice="rock" onClick={mockOnClick} disabled />);
    fireEvent.click(screen.getByText('Pierre'));
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('applies selected class when isSelected is true', () => {
    render(<ChoiceButton choice="rock" onClick={mockOnClick} isSelected />);
    const button = screen.getByText('Pierre');
    expect(button).toHaveClass('choice-button--selected');
  });

  it('applies disabled class when disabled is true', () => {
    render(<ChoiceButton choice="rock" onClick={mockOnClick} disabled />);
    const button = screen.getByText('Pierre');
    expect(button).toHaveClass('choice-button--disabled');
  });

  it('returns null for null choice', () => {
    const { container } = render(<ChoiceButton choice={null} onClick={mockOnClick} />);
    expect(container.firstChild).toBeNull();
  });
});
