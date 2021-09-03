import React from "react";
import NavbarCom from '../components/navbar';
import Sidebar from '../components/sideBar';
import Bar from '../components/generic/observerbar';
import TextBox from '../components/generic/input/textbox';
import Select from '../components/generic/input/select';
import UploadButton from '../components/generic/input/uploadButton';
import TextArea from '../components/generic/input/textarea';
import ContentCard from '../components/generic/cards/contentcard';
import StaffTable from '../components/generic/tables/StaffTable';
import { useHistory } from 'react-router-dom';
export default function Index() {
  const history = useHistory();
  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar active={8} />
        <div className='right-sec'>
          <div className='headingBar'>
            <h1 className='fw700 fs36 lh36'>Staff</h1>
            <button
              onClick={() => history.push('newstaff')}
              className='btn d-btn fw500 fs24 lh36 bg-red'
            >
              New Member
            </button>
          </div>

          <div className='d-flex justify-content-center mt-5'>
            <StaffTable
              columns={[
                'Usernames',
                'Email Address',
                'Status',
                'Role',
                'Options',
              ]}
              rows={[
                {
                  username: ' Lina Smith ',
                  email: 'Blog',
                  status: 'John Smith',
                  role: '1/12/2020',
                },
              ]}
              title='Current Staff'
            />
          </div>
        </div>
      </div>
    </>
  );
}
