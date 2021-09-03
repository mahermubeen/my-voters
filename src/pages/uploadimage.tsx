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
import Icon from '../styles/Icon';
import { useHistory } from 'react-router';
export default function Index() {
  const history = useHistory();
  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar />
        <div className='right-sec'>
          <div className='headingBar'>
            <div className='d-flex align-items-center'>
              <button className='btn' onClick={() => history.goBack()}>
                <Icon name='back' />
              </button>
              <h1 className='fw700 fs36 lh36 ml-4'>Upload Image</h1>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center flex-column mt-5 adhfeifs'>
            <div className='sdjsero'>
              <label className='fw600 fs24 lh48'>Choose Banner Style</label>
              <Select
                title='SELECT'
                items={[
                  {
                    title: 'Picture',
                    id: 0,
                  },
                  {
                    title: 'Slideshow',
                    id: 0,
                  },
                ]}
              />
            </div>
            <div className='sdjsero'>
              <label className='fw600 fs24 lh48'>Choose Banner Image(s)</label>
              <Select
                title='SELECT'
                items={[
                  {
                    title: 'Picture',
                    id: 0,
                  },
                  {
                    title: 'Slideshow',
                    id: 0,
                  },
                ]}
              />
            </div>
            <div className='sdjsero'>
              <label className='fw600 fs24 lh48'>Change Picture Every</label>
              <UploadButton label='' title='5 minutes' />
            </div>
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <button className='btn d-btn fw500 fs24 lh36 bg-red'>Upload</button>{' '}
          </div>
        </div>
      </div>
    </>
  );
}
