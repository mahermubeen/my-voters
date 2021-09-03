import React from "react";
import NavbarCom from "../components/navbar";
import Sidebar from "../components/sideBar";
import Bar from "../components/generic/observerbar";
import CandidateTable from "../components/generic/tables/candidateTable";
import CandidateChart from "../components/generic/charts/barchats";
import { useHistory } from "react-router";
export default function Index() {
  const history = useHistory();
  return (
    <>
      <NavbarCom />
      <div className="d-flex">
        <Sidebar active={6} />
        <div className="right-sec">
          <div className="headingBar">
            <h1 className="fw700 fs36 lh36">Candidate Data</h1>
          </div>
          <div className="d-flex m-auto">
            <div className="chart main-chart">
              <div className="calview mt-3 mb-3">
                <h2 className="fw500 fs18 lh48">Yearly</h2>
                <h2 className="fw500 fs18 lh48 cgry">Monthly</h2>
              </div>
              <CandidateChart />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <CandidateTable
              columns={["No.", "Observers", "Candidates", "Votes"]}
              rows={[
                {
                  no: 1,
                  Observers: "Elina Smith",
                  Candidates: "Bob Smith",
                  Votes: "152",
                },
              ]}
              title="Observers Data"
            />
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button
              onClick={() => history.push("candidates")}
              className="btn d-btn fw500 fs24 lh36 bg-red"
            >
              Post Result
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
