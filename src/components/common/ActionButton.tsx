import React from 'react';

type ActionButtonProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text?: string;
  className?: string;
  handleClick?: () => void;
};

const ActionButton = ({ leftIcon, rightIcon, text, className, handleClick }: ActionButtonProps) => {


  const handleBtnClick = () => {
    handleClick && handleClick();
  }
  return (
    <div className={`rounded-xl py-[10px] px-4 border flex items-center justify-center gap-2 text-sm font-medium ${className}`} onClick={handleBtnClick}>
      {leftIcon}
      {text}
      {rightIcon}
    </div>
  );
};

export default ActionButton;
