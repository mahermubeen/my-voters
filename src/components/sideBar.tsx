import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Icon from '../styles/Icon';
import SideBarItem from './sidebar/sidebaritem';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
export default function Sidebar(porps: any) {
  return (
    <div id='cst-sidebar' className='cst-sidebar'>
      <div className='pos-abs'>
        <div className='side-bar-logo'>
          <img src='img/logo1.png' />
        </div>
        <SideBarItem
          nav='/'
          icon='img/dashboard.png'
          active={porps.active == 0 ? true : false}
          title='Dashboard'
        />
        <SideBarItem
          nav='/uploadcontent'
          icon='img/1.png'
          active={porps.active == 1 ? true : false}
          title='Upload Content'
        />
        <SideBarItem
          nav='/managecontent'
          icon='img/2.png'
          active={porps.active == 2 ? true : false}
          title='Manage Content'
        />
        <SideBarItem
          nav='/observer'
          icon='img/3.png'
          active={porps.active == 3 ? true : false}
          title='Observers'
        />
        <SideBarItem
          nav='/newsurveys'
          icon='img/4.png'
          active={porps.active == 4 ? true : false}
          title='Surveys'
        />
        <SideBarItem
          nav='/pages'
          icon='img/5.png'
          active={porps.active == 5 ? true : false}
          title='Create Page'
        />
        <SideBarItem
          nav='/candidate'
          icon='img/6.png'
          active={porps.active == 6 ? true : false}
          title='Observer Data'
        />
        <SideBarItem
          nav='/uploadbanner'
          icon='img/7.png'
          active={porps.active == 7 ? true : false}
          title='Banner Images'
        />
        <SideBarItem
          nav='members'
          icon='img/8.png'
          active={porps.active == 8 ? true : false}
          title='Members'
        />
      </div>
    </div>
  );
}
