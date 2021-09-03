import React from "react";
export default function CandidateTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: {
    no: number;
    Observers: string;
    Candidates: string;
    Votes: string;
  }[];
}) {
  return (
    <div className="w-100">
      <h3 className="fw600 fs24 lh48 ml-4 mb-4">{title}</h3>
      <div className="cardcst cst-table">
        <table className="w-100 table table-borderless jdaskfhdisf">
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
                <div>{rows[0].no}</div>
              </td>
              <td>
                <div>{rows[0].Observers}</div>
              </td>
              <td>
                <div>{rows[0].Candidates}</div>
              </td>
              <td>
                <div>{rows[0].Votes}</div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
