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
import Icon from '../styles/Icon';
import SurveyTable from '../components/generic/tables/surveyTable';
import { useHistory } from 'react-router-dom';

export default function Index() {
  const history = useHistory();

  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar active={4} />
        <div className='right-sec'>
          <div className='headingBar'>
            <div className='d-flex align-items-center'>
              <button onClick={() => history.goBack()} className='btn'>
                <Icon name='back' />
              </button>
              <h1 className='fw700 fs36 lh36 ml-4'>Total Surveys</h1>
            </div>
          </div>

          <div className='d-flex justify-content-center mt-5'>
            <SurveyTable
              columns={[
                'Title',
                'Status',
                'Date Created',
                'Date Expired',
                'Options',
              ]}
              rows={[
                {
                  title: ' Survey title goes here ',
                  status: 'Active',
                  dateCreated: '1/12/2020',
                  dateExpired: '1/12/2020',
                },
              ]}
              title='Total Surveys'
            />
          </div>
        </div>
      </div>
    </>
  );
}
