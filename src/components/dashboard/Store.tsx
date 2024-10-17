import React, { useState } from 'react';
import Heading from './Heading';
import ActionButton from '../common/ActionButton';
import { DownArrow, Edit, Help, NineDots, Pin } from '../../icons';
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
} from 'recharts';

import { RoasGraphData } from '../temp';

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
      <ActionButton text="Export" leftIcon={<Edit width={20} />} />
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

  const ROASChartCard = () => (
    <div className="flex flex-col justify-between border border-gray-200 rounded-lg shadow-lg w-full bg-white">
      <div className="flex justify-between items-center border-b p-3">
        <div className="flex items-center gap-2 text-grey-200 text-sm">
          <span className="h-4 w-4 border"></span>
          ROAS
        </div>
        <div className="flex items-center gap-2">
          <Help width={16} />
          <Pin width={16} />
          <NineDots width={16} />
        </div>
      </div>
      <ResponsiveContainer height={200} className="w-full">
        <LineChart
          data={RoasGraphData}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `$${value}M`} />
          <Tooltip formatter={(value: number) => [`$${value}M`, 'ROAS']} />
          <Legend />
          <Line
            type="monotone"
            dataKey="thisMonth"
            stroke="#22c55e"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="lastMonth"
            stroke="#f97316"
            strokeDasharray="3 3"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
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
                      <ROASChartCard />
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
  );
};

export default Store;
