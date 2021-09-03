import React from "react";
export default function RequestBar({
  head,
  value,
}: {
  head: string;
  value: string;
}) {
  return (
    <div className="requestbar">
      <h1 className="fw700 fs24 lh36">{head}</h1>
      <p className=" fs24 lh36">{value}</p>
    </div>
  );
}
