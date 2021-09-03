import React from "react";
export default function ContentCard({
  title,
  total,
}: {
  title: string;
  total: number;
}) {
  return (
    <div className="content-card cardcst">
      <h2 className="fw500 fs24 lh36">{title}</h2>
      <h1 className="fw600 fs48 lh36">{total}</h1>
    </div>
  );
}
