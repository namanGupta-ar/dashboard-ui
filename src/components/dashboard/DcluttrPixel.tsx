import { useState } from 'react';
import ActionButton from '../common/ActionButton';
import Heading from './Heading';
import {
  Columns,
  DownArrow,
  DownArrow2,
  GoogleAds,
  Meta,
  ProjectorScreen,
  StoreIcon,
} from '../../icons';
import { Checkbox } from '@/components/ui/checkbox';

const DCluttrData = [
  {
    source: 'Meta Ads',
    spends: '₹8,526.32',
    roas: 6.79,
    dcluttrRoas: 4.26,
    dcluttrPurchases: 45,
    dcluttrCV: '₹12,033.22',
    dcluttrSessions: '3.3%',
    icon: <Meta width={16} />,
    checked: true,
  },
  {
    source: 'Google Ads',
    spends: '₹8,526.32',
    roas: 4.98,
    dcluttrRoas: 2.79,
    dcluttrPurchases: 39,
    dcluttrCV: '₹12,033.22',
    dcluttrSessions: '18%',
    icon: <GoogleAds width={16} />,
    checked: false,
  },
  {
    source: 'Store',
    spends: '',
    roas: '',
    dcluttrRoas: '',
    dcluttrPurchases: '',
    dcluttrCV: '',
    dcluttrSessions: '',
    icon: <StoreIcon width={16} />,
    checked: false,
  },
  {
    source: 'Web Analytics',
    spends: '',
    roas: '',
    dcluttrRoas: '',
    dcluttrPurchases: '',
    dcluttrCV: '',
    dcluttrSessions: '',
    icon: <ProjectorScreen width={16} />,
    checked: true,
  },
  {
    source: 'Total (for 09 sources)',
    spends: '₹93,132.12',
    roas: 4.52,
    dcluttrRoas: 4.52,
    dcluttrPurchases: 1251,
    dcluttrCV: '₹12,033.22',
    dcluttrSessions: '1.52',
    type: 'total',
    checked: false,
  },
];

const DcluttrPixel = () => {
  const [data, setData] = useState(DCluttrData);
  const [selectAll, setSelectAll] = useState(false);
  const actions = (
    <>
      <ActionButton leftIcon={<Columns width={20} />} />
      <ActionButton text="Event" rightIcon={<DownArrow width={20} />} />
      <ActionButton
        text="Attribution Model"
        rightIcon={<DownArrow width={20} />}
      />
      <ActionButton
        text="Attribution window"
        rightIcon={<DownArrow width={20} />}
      />
    </>
  );

  const itemStyles = (item: any) => {
    return item.type === 'total' ? '' : 'text-primary';
  };


  const handleSelect = (index: number) => {
    setData((prev) => {
      const updatedData = [...prev];
      if(index !== -1) {
        updatedData[index].checked = !updatedData[index].checked;
      } else {
        setSelectAll((prev) => {
          updatedData.forEach((item) => {
            item.checked = !prev;
          });
          return !prev;
        });
      }
      return updatedData;
    })
  }
  return (
    <div>
      <Heading title="Dcluttr Pixel" actions={actions} />
      <div className="rounded-lg overflow-hidden border mt-6 bg-white">
        <div className="grid grid-cols-8 gap-4 text-center text-sm font-semibold py-4 px-3">
          <div className="col-span-2 flex items-center gap-2">
            <Checkbox
              id="source"
              checked={selectAll}
              onCheckedChange={() => handleSelect(-1)}
            />
            <label htmlFor="source" className="cursor-pointer font-semibold">
              Source
            </label>
            <DownArrow2 height={14} width={14} />
          </div>
          <div>Spends</div>
          <div>ROAS</div>
          <div>Dcluttr ROAS</div>
          <div>Dcluttr Purchases</div>
          <div>Dcluttr CV</div>
          <div>Dcluttr Sessions</div>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-8 gap-4 py-4 px-3 text-center border-t ${
              item.type === 'total' ? 'font-bold' : ''
            } ${item.checked ? 'bg-grey-500' : ''} `}
          >
            <div className="col-span-2 flex items-center gap-2">
              <Checkbox
                id={`source${index}`}
                checked={item.checked}
                onCheckedChange={() => handleSelect(index)}
              />
              {item.icon}
              <label
                htmlFor={`source${index}`}
                className={`cursor-pointer ${
                  item.type !== 'total' ? 'font-semibold' : ''
                }`}
              >
                {item.source}
              </label>
            </div>
            <div className={itemStyles(item)}>
              {item.spends ? item.spends : '-'}
            </div>
            <div className={itemStyles(item)}>
              {item.roas ? item.roas : '-'}
            </div>
            <div className={itemStyles(item)}>
              {item.dcluttrRoas ? item.dcluttrRoas : '-'}
            </div>
            <div
              className={`${
                item.dcluttrPurchases ? 'text-blue-500 underline' : ''
              }`}
            >
              {item.dcluttrPurchases ? item.dcluttrPurchases : '-'}
            </div>
            <div
              className={`${item.dcluttrCV ? 'text-blue-500 underline' : ''}`}
            >
              {item.dcluttrCV ? item.dcluttrCV : '-'}
            </div>
            <div className={itemStyles(item)}>
              {item.dcluttrSessions ? item.dcluttrSessions : '-'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DcluttrPixel;
