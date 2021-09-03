import React from "react";
import NavbarCom from '../components/navbar';
import Sidebar from '../components/sideBar';
import Bar from '../components/generic/observerbar';
import PostTable from '../components/generic/tables/postTables';
import ObserverTable from '../components/generic/tables/observerTable';
import Icon from '../styles/Icon';
import RequestBar from '../components/generic/requestBar';
import { useHistory } from 'react-router-dom';

export default function Index() {
  const history = useHistory();

  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar />
        <div className='right-sec'>
          <div className='headingBar jasdklf'>
            <div className='d-flex align-items-center'>
              <button onClick={() => history.goBack()} className='btn'>
                <Icon name='back' />
              </button>
              <h1 className='fw700 fs36 lh36 ml-4'>Observer Request</h1>
            </div>

            <div className='d-flex align-items-center '>
              <button className='btn d-btn fw500 bg-black fs24 lh36 bg-red mr-5'>
                Remove
              </button>
              <button className='btn d-btn fw500 bg-red fs24 lh36'>
                Approve
              </button>
            </div>
          </div>
          <div className='d-flex m-auto align-items-center justify-content-center'>
            <div className='request-bar-parrent'>
              <RequestBar head='Profile Picture:' value='View Image' />
              <RequestBar head='Observer’s Name:' value='John Smith' />
              <RequestBar
                head='Observer’s Email Address:'
                value='johnsmith@gmail.com'
              />
              <RequestBar head='Observer’s Phone Number:' value='1234567890' />
              <RequestBar head='Employment:' value='Employed' />
              <RequestBar head='Gender:' value='Male' />
              <RequestBar head='Academic Degree:' value='Degree Title' />
              <RequestBar head='Election Center:' value='ABC Election Center' />
              <RequestBar head='Location:' value='132, My Street, Bigtown ' />
              <RequestBar head='Date of Birth:' value='1/2/1998' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
