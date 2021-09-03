import React from "react";
import NavbarCom from '../components/navbar';
import Sidebar from '../components/sideBar';
import Bar from '../components/generic/observerbar';
import PostTable from '../components/generic/tables/postTables';
import ObserverTable from '../components/generic/tables/observerTable';
import ObserverTable2 from '../components/generic/tables/observerTable2';
import Select from '../components/generic/input/select';
export default function Index() {
  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar active={3} />
        <div className='right-sec'>
          <div className='headingBar'>
            <h1 className='fw700 fs36 lh36'>Observers</h1>
          </div>
          <div className='d-flex align-items-center obv-box'>
            <Select
              title='Select'
              label='Action (Batch)'
              items={[
                { id: 0, title: 'Blog' },
                { id: 1, title: 'Event' },
                { id: 2, title: 'News etc.' },
              ]}
            />
            <button className='btn d-btn fw500 fs24 lh36 bg-red'>
              Download
            </button>
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
              title='Total  Observer'
            />
          </div>
        </div>
      </div>
    </>
  );
}
