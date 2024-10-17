import React from 'react';

type HeadingProps = {
  title: string;
  subTitle?: string;
  actions?: React.ReactNode;
};
const Heading = ({ title, subTitle, actions }: HeadingProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-grey-100 text-sm">{subTitle}</p>
      </div>
      <div className="flex gap-2">{actions}</div>
    </div>
  );
};

export default Heading;
