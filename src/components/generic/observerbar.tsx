import React from "react";
import Icon from '../../styles/Icon';
import { useHistory } from 'react-router-dom';
import SelectDot from './input/selectDot';
export default function Bar({
  name,
  src,
  desc,
  onClick,
}: {
  name: string;
  src: string;
  desc: string;
  onClick?: () => void;
}) {
  const history = useHistory();
  return (
    <div className='observerBar'>
      <img src={src} />
      <p className='fw500 fs18 fw32'>
        <span onClick={() => history.push('observerrequest')}>{name}</span>
        {desc}
      </p>
      {onClick ? (
        <button className='btn'>
          <SelectDot
            items={[
              { id: 0, title: 'View' },
              { id: 1, title: 'Approve' },
              { id: 2, title: 'Delete' },
            ]}
          />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
