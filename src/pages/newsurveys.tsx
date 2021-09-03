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
import ButtonDel from '../components/generic/input/buttondele';
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
              <h1 className='fw700 fs36 lh36 ml-4'>New Survey</h1>
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
              title='Recent Surveys'
            />
          </div>
          <div className='headingBar mt-5'>
            <div className='d-flex align-items-center'>
              <h1 className='fw700 fs36 lh36 ml-4'>New Survey</h1>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='dnkaskrier'>
              <div className='d-flex mr-5'>
                <TextArea hasButton={true} label='Question' />
              </div>

              <div className='d-flex mr-5'>
                <TextBox type='text' hasButton={true} label='Answer 1' />
              </div>
              <div className='d-flex mr-5'>
                <TextBox type='text' hasButton={true} label='Answer 2' />
              </div>
              <div className='d-flex mr-5'>
                <TextBox type='text' hasButton={true} label='Answer 3' />
              </div>
              {/* <div className='d-flex mr-5 nkafids'>
                <Select
                  title='Select'
                  items={[{ id: 0, title: '' }]}
                  label='Type'
                />
              </div> */}
              <div className='d-flex justify-content-between mt-5'>
                <button className='btn fw500 fs24 lh36 cl-p'>
                  Add Question
                </button>
                <button
                  onClick={() => history.push('totalsurveys')}
                  className='btn d-btn fw500 fs24 lh36 bg-red mr-135'
                >
                  Continue
                </button>{' '}
              </div>
            </div>
            <div className='jdkr3j'>
              <Select
                title='Select'
                items={[
                  { id: 0, title: 'Single Choice' },
                  { id: 0, title: 'Multiple Choice' },
                  { id: 0, title: 'Comment' },
                ]}
                label='Type'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
