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
export default function Index() {
  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar active={8} />
        <div className='right-sec'>
          <div className='headingBar'>
            <h1 className='fw700 fs36 lh36'>Add Staff Member</h1>
          </div>

          <div className='d-flex justify-content-center mt-5 flex-column align-items-center staffBox'>
            <TextBox placeholder='' label='Name' type='text' />
            <TextBox placeholder='' label='Email Address' type='text' />
            <TextBox placeholder='' label='Password' type='password' />
            <Select
              label='Select Role'
              title='Select'
              items={[
                { id: 0, title: 'Blog' },
                { id: 1, title: 'Event' },
                { id: 2, title: 'News etc.' },
              ]}
            />

            <div className="flex-center">
              <div className="btns-wrap">
                <button className="cancel-btn">
                  Cancel
                </button>

                <button className="create-btn">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
