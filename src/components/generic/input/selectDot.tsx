import React from "react";
import { Dropdown } from "react-bootstrap";
import Icon from "../../../styles/Icon";
export default function SelectDot({
  items,
}: {
  items: { id: number; title: string; onClick?: () => void }[];
}) {
  return (
    <div className="cst-select cst-nobrd">
      <Dropdown>
        <Dropdown.Toggle className="menu-wrap">
          <Dropdown.Menu className="drop-menuu1">
            {items.map((x, i) => (
              <Dropdown.Item
                onClick={() => (x.onClick ? x.onClick() : console.log())}
              >
                {x.title}
              </Dropdown.Item>
            ))}
            <div className="tri1"></div>
          </Dropdown.Menu>
          <Icon name="menu" />
        </Dropdown.Toggle>
      </Dropdown>
    </div>
  );
}
