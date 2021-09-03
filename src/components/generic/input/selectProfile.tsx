import React from "react";
import { Dropdown } from 'react-bootstrap';
import Icon from '../../../styles/Icon';
export default function SelectProfile({
  items,
}: {
  items: { id: number; title: string; onClick?: () => void }[];
}) {
  return (
    <div className='cst-select profile-btn'>
      <Dropdown>
        <Dropdown.Toggle>
          <img src='img/logo.png' />
        </Dropdown.Toggle>

        <Dropdown.Menu className="profile-menu">
          <div className="tri"></div>
          {items.map((x, i) => (
            <Dropdown.Item
              onClick={() => (x.onClick ? x.onClick() : console.log())}
            >
              {x.title}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
