import React from "react";
import Icon from '../../styles/Icon';
import { BrowserRouter, useHistory } from 'react-router-dom';
export default function SideBarItem({
  icon,
  title,
  active,
  nav,
}: {
  icon: string;
  title: string;
  active: Boolean;
  nav: string;
}) {
  const history = useHistory();
  return (
    <a
      style={{ textDecoration: 'none' }}
      onClick={() => history.push(nav)}
      className={`sidebar-item ${active == true ? 'sidebaractive' : ''}`}
    >
      <img src={icon} />
      <p>{title}</p>
    </a>
  );
}
