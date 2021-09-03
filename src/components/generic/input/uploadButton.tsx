import React from "react";
import { Dropdown } from "react-bootstrap";
import Icon from "../../../styles/Icon";
export default function UploadButton({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="cst-select d-flex flex-column">
      {label ? <label className="fw600 fs24 lh48">{label}</label> : <></>}
      <button className="btn">{title}</button>
    </div>
  );
}
