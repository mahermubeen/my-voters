import React from "react";
import ButtonDel from "./buttondele";
export default function TextBox({
  type,
  label,
  placeholder,
  hasButton,
}: {
  type: string;
  label: string;
  placeholder?: string;
  hasButton?: boolean;
}) {
  return hasButton == true ? (
    <>
      <div className="cst-textinput">
        <label className="fw600 fs24 lh48">{label}</label>
        <div className="d-flex">
          <input className="adhsfie33" type={type} />
          <ButtonDel />
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="cst-textinput cst-text-width">
        <label className="fw600 fs24 lh48">{label}</label>
        <input type={type} />
      </div>
    </>
  );
}
