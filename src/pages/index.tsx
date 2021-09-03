import React, { useEffect } from "react";
import NavbarCom from "../components/navbar";
import Sidebar from "../components/sideBar";
import Bar from "../components/generic/observerbar";
import CandidateChart from "../components/generic/charts/barchats.jsx";
import VoterChart from "../components/generic/charts/VoterChart";
import StationChart from "../components/generic/charts/stationChart";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/reducers/counter";

export default function Index() {
  const dispatch = useDispatch();

  return (
    <>
      <NavbarCom />
      <div className="d-flex">
        <Sidebar active={0} />
        <div className="right-sec">
          <div className="headingBar">
            <h1 className="fw700 fs36 lh36">Dashboard</h1>
          </div>
          <div className="main-content">
            <div>
              <div className="chart main-chart">
                <div className="calview mt-3 mb-3">
                  <h2 className="fw500 fs18 lh48">Yearly</h2>
                  <h2 className="fw500 fs18 lh48 cgry">Monthly</h2>
                </div>
                <CandidateChart />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5 chart-main1">
              <div className="chart-v">
                <VoterChart />
              </div>
              <div className="chart-v">
                <StationChart />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button className="btn bg-red d-btn">Download Result</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
