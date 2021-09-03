import React from "react";
import { useHistory } from 'react-router-dom';
import SelectDot from '../input/selectDot';

export default function ObserverTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: {
    name: string;
    email: string;
    location: string;
    electioncenter: string;
  }[];
}) {
  const history = useHistory();

  return (
    <div className='cardcst cst-table w-100'>
      <h3 className='fw600 fs24 lh48'>{title}</h3>
      <table className='post-table table table-borderless'>
        <tr>
          <th>hello</th>
          {columns.map((x, i) => (
            <th>
              <div>{x}</div>
            </th>
          ))}
        </tr>

        {Array.from({ length: 10 }).map((x, i) => (
          <tr>
            <td>
              <div
                onClick={() => history.push('observerrequest')}
                className='lbl-grn'
              >
                <img src='img/logo.png' />
                {rows[0].name}
              </div>
            </td>
            <td>
              <div>{rows[0].email}</div>
            </td>
            <td>
              <div>{rows[0].location}</div>
            </td>
            <td>
              <div>{rows[0].electioncenter}</div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
