import React from "react";
import NavbarCom from "../components/navbar";
import Sidebar from "../components/sideBar";
import Bar from "../components/generic/observerbar";
import TextBox from "../components/generic/input/textbox";
import Select from "../components/generic/input/select";
import UploadButton from "../components/generic/input/uploadButton";
import TextArea from "../components/generic/input/textarea";
import ContentCard from "../components/generic/cards/contentcard";
import PostTable from "../components/generic/tables/postTables";

import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useGetAllPostsQuery } from "../services/post";

export default function Index() {
  const token = localStorage.getItem("user-token");
  const { data, isSuccess } = useGetAllPostsQuery(token);

  return (
    <>
      <NavbarCom />
      <div className="d-flex">
        <Sidebar active={2} />
        <div className="right-sec">
          <div className="headingBar">
            <h1 className="fw700 fs36 lh36">Manage Content</h1>
          </div>
          <div className="grid-row">
            <ContentCard title="Blogs" total={12} />
            <ContentCard title="News" total={15} />
            <ContentCard title="Events" total={3} />
            <ContentCard title="Surveys" total={2} />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <PostTable
              columns={[
                "Title",
                "Category",
                "Publisher",
                "Publish Date",
                "Options",
              ]}
              rows={data}
              title="Total Posts"
            />
          </div>
        </div>
      </div>
    </>
  );
}
