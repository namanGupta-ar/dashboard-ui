import React, { ReactNode } from 'react';
import shopify from '../../assets/images/shopify.png';
import Cross from '../../icons/Cross';
import { FloppyDisc, GoogleAds, Meta } from '@/icons';

interface IconsProps {
  icon: ReactNode;
  className?: string;
}
const Icons = ({ icon, className }: IconsProps) => (
  <div
    className={`h-10 w-10 flex items-center justify-center bg-white rounded-full ${className}`}
  >
    {icon}
  </div>
);

const Circle = ({ className="", small=true }: any) => {
  return (
    <div
      className={`absolute top-0 border-4 border-white border-opacity-15 rounded-full transform  -translate-y-1/2 ${
        small ? 'h-[380px] w-[380px]' : 'h-[594px] w-[594px]'
      }  ${className}`}
    ></div>
  );
};

const Banner = () => {
  return (
    <div className="relative bg-primary w-full rounded-lg flex items-center justify-center py-10 overflow-hidden">
      <Cross className="absolute top-0 right-0 m-4" />
      <Circle className="top-[160px] left-0 -translate-x-1/2" />
      <Circle small={false} className="top-[160px] left-0 -translate-x-1/2" />
      <Circle className="top-[160px] right-0 translate-x-1/2" />
      <Circle small={false} className="top-[160px] right-0 translate-x-1/2" />
      <Icons
        icon={
          <span className="h-5 w-5">
            <img src="images/Shopify.png" />
          </span>
        }
        className="absolute top-5 left-[250px]"
      />
      <Icons
        icon={<FloppyDisc width={16} />}
        className="absolute bottom-4 left-[155px]"
      />
      <div className="text-white text-center">
        <p className="text-2xl font-bold">Attribution</p>
        <p className="text-[13px] opacity-60">
          Understand the effectiveness of all your marketing channels.
        </p>
      </div>
      <Icons
        icon={<Meta width={20} />}
        className="absolute top-5 right-[250px]"
      />
      <Icons
        icon={<GoogleAds width={20} />}
        className="absolute bottom-4 right-[155px]"
      />
    </div>
  );
};

export default Banner;
