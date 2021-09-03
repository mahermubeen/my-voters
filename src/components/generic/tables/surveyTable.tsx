import React from "react";
import SelectDot from '../input/selectDot';
export default function SurveyTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: {
    title: string;
    status: string;
    dateCreated: string;
    dateExpired: string;
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
              <div>{rows[0].title}</div>
            </td>
            <td>
              <div>{rows[0].status}</div>
            </td>
            <td>
              <div>{rows[0].dateCreated}</div>
            </td>
            <td>
              <div>{rows[0].dateExpired}</div>
            </td>
            <td>
              {' '}
              <SelectDot
                items={[
                  { id: 0, title: 'View' },
                  { id: 1, title: 'Edit' },
                  { id: 2, title: 'Remove' },
                ]}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
