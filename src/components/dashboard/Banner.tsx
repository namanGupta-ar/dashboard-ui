import React, { ReactNode } from 'react';
import shopify from "../../assets/images/shopify.png";
import meta from "../../assets/images/meta.png";
import Cross from '../../icons/Cross';

interface IconsProps {
  icon: ReactNode;
  className?: string;
}
const Icons = ({ icon, className }: IconsProps) => (
  <div
    className={`h-10 w-10 flex items-center justify-center bg-white rounded-full ${className}`}
  >
    {/* {icon} */}
  </div>
);
const Banner = () => {
  return (
    <div className="relative bg-primary w-full rounded-lg flex items-center justify-center py-10">
      <Cross className="absolute top-0 right-0 m-4" />
      <Icons
        icon={<img src={meta} />}
        className="absolute top-[10%] left-[20%]"
      />
      <Icons
        icon={<img src={meta} />}
        className="absolute top-[40%] left-[10%]"
      />
      <div className="text-white text-center">
        <p className="text-2xl font-bold">Attribution</p>
        <p className="text-[13px] opacity-60">
          Understand the effectiveness of all your marketing channels.
        </p>
      </div>
      <Icons
        icon={<img src={meta} />}
        className="absolute top-[40%] right-[10%]"
      />
      <Icons
        icon={<img src={meta} />}
        className="absolute top-[10%] right-[20%]"
      />
    </div>
  );
};

export default Banner;
