import React from 'react';
import ActionButton from '../common/ActionButton';
import Heading from './Heading';
import { Columns, DownArrow, DownArrow2, Edit } from '../../icons';
import { DCluttrData } from '../temp';
import { Checkbox } from '@/components/ui/checkbox';

const DcluttrPixel = () => {
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

  return (
    <div>
      <Heading title="Dcluttr Pixel" actions={actions} />
      <div className="rounded-lg overflow-hidden border mt-6">
        <div className="grid grid-cols-8 gap-4 text-center text-sm font-semibold py-4 px-3">
          <div className="col-span-2 flex items-center gap-2">
            <Checkbox id="source" />
            <label htmlFor="source" className="cursor-pointer">
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
        {DCluttrData.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-8 gap-4 py-4 px-3 text-center border-t ${
              item.type === 'total' ? 'font-bold' : ''
            } `}
          >
            <div className="col-span-2 flex items-center gap-2">
              <Checkbox id={`source${index}`} />
              <label htmlFor={`source${index}`} className="cursor-pointer">
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
