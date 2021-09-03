import React from "react";
import ButtonDel from './buttondele';
export default function TextArea({
  label,
  placeholder,
  hasButton,
}: {
  label: string;
  placeholder?: string;
  hasButton?: boolean;
}) {
  return hasButton == true ? (
    <>
      <div className='cst-textinput'>
        <label className='fw600 fs24 lh48'>{label}</label>
        <div className='d-flex'>
          <textarea className='adhsfie33' rows={3}></textarea>
          <ButtonDel />
        </div>
      </div>
    </>
  ) : (
    <>
      <div className='cst-textinput'>
        <label className='fw600 fs24 lh48'>{label}</label>
        <textarea rows={5}></textarea>
      </div>{' '}
    </>
  );
}

{
  /* <div className="cst-textinput">
      <label className="fw600 fs24 lh48">{label}</label>
      <textarea rows={5}></textarea>
    </div> */
}
