import React from 'react';
import './style/ChoiceButton.scss';
import type {Choice} from "../../types/GameLogicTypes.ts";
import {CHOICE_LABELS} from "../../utils/gameLogic.ts";

interface ChoiceButtonProps {
  choice: Choice;
  onClick: () => void;
  disabled?: boolean;
  isSelected?: boolean;
}

export const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  choice,
  onClick,
  disabled = false,
  isSelected = false,
}) => {
  if (!choice) return null;

  return (
    <button
      className={`choice-button ${isSelected ? 'choice-button--selected' : ''} ${
        disabled ? 'choice-button--disabled' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {CHOICE_LABELS[choice]}
    </button>
  );
};
