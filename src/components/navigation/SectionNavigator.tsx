import { useState } from 'react';
import ActionButton from '../common/ActionButton';
import {
  FloppyDisc,
  GoogleAds,
  Home,
  Meta,
  Plus,
  ProjectorScreen,
  RightArrow,
} from '@/icons';
import { Monitor } from 'lucide-react';

const Sections = [
  {
    icon: <Home width={16} />,
    text: 'Home',
  },
  {
    icon: <FloppyDisc width={16} />,
    text: 'Dcluttr Pixel',
  },
  {
    icon: <Meta width={16} />,
    text: 'Meta Ads',
  },
  {
    icon: <GoogleAds width={16} />,
    text: 'Google Ads',
  },
  {
    icon: (
      <span className="h-5 w-5">
        <img src="images/Shopify.png" alt="logo" />
      </span>
    ),
    text: 'Shopify',
  },
  {
    icon: <ProjectorScreen width={16} />,
    text: 'Web Analytics',
  },
  {
    icon: <ProjectorScreen width={16} />,
    text: 'Web Analytics',
  },
  {
    icon: <ProjectorScreen width={16} />,
    text: 'Web Analytics',
  },
];

const SectionNavigator = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <div className="flex items-center justify-between py-3 px-4 border-t">
      <div className="relative max-w-[50%]">
        <div className="flex gap-[1px] flex-row flex-nowrap p-1 rounded-xl border bg-grey-500 overflow-x-scroll whitespace-nowrap scrollbar-none">
          {Sections.map((section, index) => (
            <ActionButton
              handleClick={() => handleClick(index)}
              key={index}
              leftIcon={section.icon}
              text={section.text}
              className={`border-none cursor-pointer ${
                index === selectedIndex ? 'bg-primary text-white' : ''
              }`}
            />
          ))}
          <div className="absolute top-3 right-2 z-10 border flex bg-white rounded-md pointer-events-none">
            <span className="rotate-180 p-1">
              <RightArrow width={12} />
            </span>
            <span className="p-1 border-l">
              <RightArrow width={12} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <ActionButton
          leftIcon={<Monitor width={20} />}
          text="Customize Dashboard"
        />
        <ActionButton
          leftIcon={<Plus width={20} />}
          text="Create Section"
          className="bg-primary text-white"
        />
      </div>
    </div>
  );
};

export default SectionNavigator;
