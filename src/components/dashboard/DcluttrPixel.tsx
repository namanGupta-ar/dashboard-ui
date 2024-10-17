import React from 'react'
import ActionButton from '../common/ActionButton';
import Heading from './Heading';
import { Columns, DownArrow, Edit } from '../../icons';

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
  return (
    <div>
      <Heading
        title="Dcluttr Pixel"
        actions={actions}
      />
    </div>
  );
}

export default DcluttrPixel