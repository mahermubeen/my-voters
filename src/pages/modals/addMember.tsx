import React from "react";
import { openModal } from "../redux/reducers/members";
import { useDispatch } from "react-redux";

export default function AddMember() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="member-modal">
        <div className="popup">
          <img
            alt="cross"
            className="cross-img"
            src="img/cross.png"
          />
          <form className="addMember-form">
            <h1>this is members form</h1>
          </form>
        </div>
      </div>
    </>
  );
}
