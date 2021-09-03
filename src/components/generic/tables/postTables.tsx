import React from "react";
import SelectDot from "../input/selectDot";
export default function PostTable({ title, columns, rows }) {
  return (
    <div className="cardcst cst-table w-100">
      <h3 className="fw600 fs24 lh48">{title}</h3>
      <table className="post-table table table-borderless">
        <tr>
          {columns && columns.map((x, i) => (
            <th>
              <div>{x}</div>
            </th>
          ))}
        </tr>

        {rows && rows.map((row, i) => (
          <tr>
            <td>
              <div>{row.title}</div>
            </td>
            <td>
              <div>{row.postType}</div>
            </td>
            <td>
              <div>{row.user.name}</div>
            </td>
            <td>
              <div>{row.publishDate}</div>
            </td>
            <td>
              <SelectDot
                items={[
                  { id: 0, title: "Blog" },
                  { id: 1, title: "Event" },
                  { id: 2, title: "News etc." },
                ]}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
