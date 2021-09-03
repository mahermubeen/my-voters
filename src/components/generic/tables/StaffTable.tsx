import React from "react";
import SelectDot from '../input/selectDot';
export default function PostTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: {
    username: string;
    email: string;
    status: string;
    role: string;
  }[];
}) {
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
                <img src='img/logo.png' />
                {rows[0].username}
              </div>
            </td>
            <td>
              <div>{rows[0].email}</div>
            </td>
            <td>
              <div>{rows[0].status}</div>
            </td>
            <td>
              <div>{rows[0].role}</div>
            </td>
            <td>
              <SelectDot
                items={[
                  { id: 0, title: 'Blog' },
                  { id: 1, title: 'Event' },
                  { id: 2, title: 'News etc.' },
                ]}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
