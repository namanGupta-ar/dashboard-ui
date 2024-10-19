import React, { useState } from 'react';
import Heading from './Heading';
import ActionButton from '../common/ActionButton';
import { DownArrow, DownArrow2, Edit, Help, NineDots, Pin, Share } from '../../icons';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvided,
  DraggableStateSnapshot,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

import { RoasGraphData } from '../temp';
import { Checkbox } from '@/components/ui/checkbox';

const getItems = (count: number) =>
  Array.from({ length: count }, (v, k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

interface Item {
  id: string;
  content: string;
}

const Store = () => {
  const [data, setData] = useState<Item[]>(getItems(3)); // Data is an array of Item objects

  const actions = (
    <>
      <ActionButton text="Edit" leftIcon={<Edit width={20} />} />
      <ActionButton text="Export" leftIcon={<Share width={20} />} />
    </>
  );

  // Utility function to reorder items after drag-and-drop
  const reorder = (
    list: Item[],
    startIndex: number,
    endIndex: number
  ): Item[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  // When dragging ends
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(data, result.source.index, result.destination.index);
    setData(items);
  };

  const sales = [
    { name: 'Jan', product1: 4000, product2: 2400 },
    {
      name: 'Feb',
      product1: 3000,
      product2: 2210,
    },
    {
      name: 'Mar',
      product1: 2000,
      product2: 2290,
    },
    {
      name: 'Apr',
      product1: 2780,
      product2: 2000,
    },
  ];

  const ROASChartCard = ({ title, checkbox = false, options = false }: any) => (
    <div className="flex flex-col justify-between border border-gray-200 rounded-lg shadow-lg w-full bg-white">
      <div className="flex justify-between items-center border-b p-3">
        <div className="flex items-center gap-2 text-grey-200 text-sm font-semibold">
          {checkbox && <Checkbox />}
          {title}
        </div>
        {options && (
          <div className="flex items-center gap-2">
            <Help width={16} />
            <Pin width={16} />
            <NineDots width={16} />
          </div>
        )}
      </div>
      <div className='flex items-center justify-between px-3 py-[14px]'>
        <p className='text-xl font-bold' >5.49</p>
        <div className='flex flex-col items-end '>
          <p className='font-bold text-primary'>
            <span className='rotate-180 inline-block'><DownArrow2 width={14} /></span>
            2.4%
          </p>
          <p className="text-sm text-gray-500">vs 2.69 last month</p>
        </div>
      </div>

      <ResponsiveContainer height={200} className="w-full p-3">
        <AreaChart data={RoasGraphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickCount={8}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(number) => `$${number.toFixed(1)}M`}
          />
          <Tooltip formatter={(value: number) => [`$${value}M`, 'ROAS']} />
          <Area
            type="linear"
            dataKey="thisMonth"
            stroke="#2EB76F"
            fill="#2EB76F"
            fillOpacity={0.1}
            strokeWidth={2}
          ></Area>
          <Area
            type="linear"
            dataKey="lastMonth"
            stroke="#DB3500"
            fill="none"
            strokeWidth={2}
            strokeDasharray="4"
          ></Area>
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex gap-4 text-xs text-grey-300 border-t p-3">
        <p>
          <span className="text-green-500">●</span>
          This Month
        </p>
        <p>
          <span className="text-orange-500">●</span> Last Month
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <Heading
        title="Store"
        subTitle="Find all the analytics for store"
        actions={actions}
      />
      <div className="mt-6">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided: DroppableProvided) => (
              <div
                className="grid grid-cols-3 gap-4"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided: DraggableProvided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ROASChartCard title="ROAS" checkbox={true} options={true} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="flex gap-4 mt-4">
        <ROASChartCard title="Spends and Revenue Performance" />
        <ROASChartCard title="ROAS" />
      </div>
    </div>
  );
};

export default Store;
