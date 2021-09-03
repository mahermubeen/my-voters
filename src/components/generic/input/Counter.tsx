import React from "react";
import { Dropdown } from 'react-bootstrap';
import Icon from '../../../styles/Icon';
export default function Counter({
  label,
  title,
  items,
}: {
  label?: string;
  title: string;
  items: { id: number; title: string }[];
}) {
  return (
    <div className='cst-select counter'>
      {label ? (
        <>
          {' '}
          <label className='fw600 fs24 lh48'>{label}</label>
        </>
      ) : (
        <></>
      )}
      <div className='counte-p'>
        <input value={title} id='counterinput' type='number' title={title} />
        <div>
          <Icon name='cv1' />
          <Icon name='cv2' />
        </div>
      </div>
    </div>
  );
}
