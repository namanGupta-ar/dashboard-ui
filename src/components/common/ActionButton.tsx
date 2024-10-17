import React from 'react';

type ActionButtonProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text?: string;
};

const ActionButton = ({ leftIcon, rightIcon, text }: ActionButtonProps) => {
  return (
    <div className="rounded-lg py-[10px] px-4 border flex item-center justify-center gap-2 text-sm">
      {leftIcon}
      {text}
      {rightIcon}
    </div>
  );
};

export default ActionButton;
