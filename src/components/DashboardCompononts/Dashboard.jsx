import React, { Component } from "react";
import { Tabs, Tab, Sonnet, Container, Fade } from "react-bootstrap";
import UserDetail from "./UserDetail";
import "./Dashboard.css";
import Question from "./Question";
import Answer from "./Answer";
import Blog from "./Blog";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const auth = useSelector((state) => state.auth);

  if (!auth._id) return <Navigate to="/login" />;
  return (
    <>
      <div className="dashboard_section">
        <Container>
          <div
            style={{
              background: "#F6FBF4",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              zIndex: "100",
            }}
          >
            <UserDetail />
            <hr />
            <Tabs
              defaultActiveKey="Blog"
              transition={Fade}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Blog" title="Blog">
                {/* <h2>You haven't written any blog till now </h2> */}
                <Blog />
              </Tab>
              <Tab eventKey="question" title="question">
                <Question />
              </Tab>
              <Tab eventKey="answer" title="Answer">
                <Answer />
              </Tab>
            </Tabs>{" "}
          </div>
        </Container>
      </div>
    </>
  );
}
