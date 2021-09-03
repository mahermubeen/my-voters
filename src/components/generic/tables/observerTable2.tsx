import React from "react";
import SelectDot from '../input/selectDot';
import { useHistory } from 'react-router';
export default function ObserverTable2({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: {
    username: string;
    email: string;
    Locations: string;
    ElectionCenters: string;
  }[];
}) {
  const history = useHistory();
  return (
    <div className='cardcst cst-table w-100'>
      <h3 className='fw600 fs24 lh48'>{title}</h3>
      <table className='post-table table table-borderless'>
        <tr>
          {columns.map((x, i) => (
            <th>
              <div>{x}</div>
            </th>
          ))}
        </tr>

        {Array.from({ length: 5 }).map((x, i) => (
          <tr>
            <td>
              <div className='lbl-grn'>
                <input className='dfasd' checked={true} type='checkbox' />
                <img src='img/logo.png' />
                {rows[0].username}
              </div>
            </td>
            <td>
              <div>{rows[0].email}</div>
            </td>
            <td>
              <div>{rows[0].Locations}</div>
            </td>
            <td>
              <div>{rows[0].ElectionCenters}</div>
            </td>
          </tr>
        ))}
      </table>
      <div className='w-100 d-flex justify-content-end'>
        <a
          className='text-right fw500 fs18 lh32 cb1'
          onClick={() => history.push('observers')}
        >
          view all
        </a>
      </div>
    </div>
  );
}
