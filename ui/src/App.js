import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
/*
VIKY'S COMMENT IS HERE
*/
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import ContributorList from "./components/project-notes/contributorList";
import EditContributor from "./components/project-notes/editContributor";
import CreateContributor from "./components/project-notes/createContributor";
import LandingPage from './components/landingpage/Landingpage'
import Login from './components/login/Login'
import Signup from './components/register/Register'
import Feed from './components/feed/Feed';
import EditUserPage from "./components/edituser/edituserpage";
import PublicProfile from "./components/publicprofile/publicprofile";

import PrivateUserProfile from "./components/privateUserProfile/PrivateUserProfile";
//test change
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/edituserpage" element={<EditUserPage />} />
        <Route path="/privateUserProfile" element={<PrivateUserProfile />} />
        <Route path="/project-notes/contributors" element={<ContributorList />} />
        <Route path="/project-notes/editContributor/:id" element={<EditContributor />} />
        <Route path="/project-notes/create" element={<CreateContributor />} />
        <Route path="/feed" element={<Feed />} />
        <Route path = "/publicprofile" element = {<PublicProfile/>} />
      </Routes>
    </>
  );
};

export default App;
