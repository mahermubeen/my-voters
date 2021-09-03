import React from "react";
import Icon from '../../styles/Icon';
import SelectDot from './input/selectDot';
import { useHistory } from 'react-router';
export default function BannerBar({ text }: { text: string }) {
  const history = useHistory();
  return (
    <div className='bannerBar'>
      <p className='fw500 fs24 lh36'> {text}</p>
      <div className='khasdf-sadiw'>
        <SelectDot
          items={[
            {
              id: 0,
              title: 'Upload Images',
              onClick: () => history.push('uploadimage'),
            },
            {
              id: 1,
              title: 'Update Images',
              onClick: () => history.push('uploadimage'),
            },
            {
              id: 2,
              title: 'Remove Images',
              onClick: () => history.push('uploadimage'),
            },
          ]}
        />
      </div>
    </div>
  );
}
