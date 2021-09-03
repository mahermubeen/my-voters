import React from "react";
import NavbarCom from '../components/navbar';
import Sidebar from '../components/sideBar';
import Bar from '../components/generic/observerbar';
import PostTable from '../components/generic/tables/postTables';
import ObserverTable from '../components/generic/tables/observerTable';
import ObserverTable2 from '../components/generic/tables/observerTable2';
import { useHistory } from 'react-router-dom';

export default function Index() {
  const history = useHistory();

  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar active={3} />
        <div className='right-sec'>
          <div className='headingBar'>
            <h1 className='fw700 fs36 lh36'>Observers</h1>
            <button className='btn d-btn fw500 fs24 lh36 bg-red'>
              Download
            </button>
          </div>
          <div className='obser-content'>
            <div className='snakd2xs'>
              <div className='cardcst mr-2 px-5 py-3'>
                <h2 className='text-left fw600 fs24 lh48'>Observer Requests</h2>
                <div className='d-flex flex-column '>
                  <Bar
                    src='img/logo.png'
                    name='Lina Smith'
                    desc='is waiting for your request to be approved!'
                    onClick={() => {}}
                  />
                  <Bar
                    src='img/logo.png'
                    name='Lina Smith'
                    desc='is waiting for your request to be approved!'
                    onClick={() => {}}
                  />
                  <Bar
                    src='img/logo.png'
                    name='Lina Smith'
                    desc='is waiting for your request to be approved!'
                    onClick={() => {}}
                  />
                  <Bar
                    src='img/logo.png'
                    name='Lina Smith'
                    desc='is waiting for your request to be approved! is waiting for your request to be approved!'
                    onClick={() => {}}
                  />
                  <a
                    onClick={() => history.push('observers')}
                    className='text-right fw500 fs18 lh32 cb1'
                  >
                    view all
                  </a>
                </div>
              </div>
            </div>
            <div className='snakd2xs'>
              <div className='content-card1 cardcst'>
                <h2 className='fw600 fs24 lh48'>Registered Observers</h2>
                <h1 className='fw600 fs48 lh48'>125</h1>
                <h2 className='fw600 fs24 lh48'>Registered Observers</h2>
                <h1 className='fw600 fs48 lh48'>125</h1>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <ObserverTable2
              columns={[
                'Usernames',
                'Email Address',
                'Locations',
                'Election Centers',
              ]}
              rows={[
                {
                  username: ' Lina Smith ',
                  email: 'linasmith@gmail.com',
                  Locations: '132, My Street, Bigtown ',
                  ElectionCenters: 'ABC Election Center',
                },
              ]}
              title='Current Observer'
            />
          </div>
        </div>
      </div>
    </>
  );
}
