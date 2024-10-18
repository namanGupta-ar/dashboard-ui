import React from 'react';
import ActionButton from '../common/ActionButton';
import {
  Calendar,
  ChartLine,
  DownArrow,
  Reverse,
  RightArrow,
  Bell,
} from '@/icons';
import { Switch } from '@/components/ui/switch';

const FilterActionsBar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-6">
      <div>
        <p className="text-sm font-medium flex items-center gap-1">
          Dashboard <RightArrow width={10} />
          <span className="font-bold">Home</span>
        </p>
        <p className="text-xs text-grey-400">Last updated: 12:56 PM</p>
      </div>

      <div className="flex items-center gap-2">
        <ActionButton
          leftIcon={<ChartLine width={20} />}
          rightIcon={<Switch />}
        />
        <ActionButton
          leftIcon={<Calendar width={20} />}
          text="Today"
          rightIcon={<DownArrow width={20} />}
        />
        <ActionButton text="Group By" rightIcon={<DownArrow width={20} />} />
        <span className="p-2">
          <Reverse width={15} />
        </span>
        <div className="relative">
          <p className="absolute p-[2px] px-1 rounded-sm text-white text-[9px] -top-3 -right-1 bg-[#DB5050]">
            1
          </p>
          <Bell width={20} />
        </div>
      </div>
    </div>
  );
};

export default FilterActionsBar;
