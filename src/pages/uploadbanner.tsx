import React from "react";
import NavbarCom from '../components/navbar';
import Sidebar from '../components/sideBar';
import Bar from '../components/generic/observerbar';
import TextBox from '../components/generic/input/textbox';
import Select from '../components/generic/input/select';
import UploadButton from '../components/generic/input/uploadButton';
import TextArea from '../components/generic/input/textarea';
import ContentCard from '../components/generic/cards/contentcard';
import PostTable from '../components/generic/tables/postTables';
import MemberTable from '../components/generic/tables/memberTable';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Example from '../components/generic/Dnd/example';
import BannerBar from '../components/generic/bannerBar';

export default function Index() {
  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar active={7} />
        <div className='right-sec'>
          <div className='headingBar'>
            <h1 className='fw700 fs36 lh36'>Upload Banners</h1>
            {/* <button className='btn d-btn fw500 fs24 lh36'>Add New</button> */}
          </div>

          <div className='bannerBox-parent'>
            <BannerBar text='Home Page' />
            <BannerBar text='Blog Page' />
            <BannerBar text='Statistics Page' />
            <BannerBar text='Members Page' />
            <BannerBar text='Survey Page ' />
            <BannerBar text='Regulations Page' />
            <BannerBar text='How To Guide Page' />
            <BannerBar text='About Page' />
            <BannerBar text='Contact Page' />
          </div>
        </div>
      </div>
    </>
  );
}
