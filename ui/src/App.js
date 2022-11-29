import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
/*
VIKY'S COMMENT IS HERE
*/
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import ContributorList from "./components/project-notes/contributorListPage";
import EditContributor from "./components/project-notes/editContributor";
import CreateContributor from "./components/project-notes/createContributor";
import LandingPage from './components/users/Landingpage'
import Login from './components/users/Login'
import Signup from './components/users/Register'
import Feed from './components/feed/Feed';
import EditUserPage from "./components/users/editUserPage";
<<<<<<< HEAD
//import PublicProfile from "./components/users/PublicProfilePage";
=======
<<<<<<< HEAD
import PublicProfilePage from "./components/users/PublicProfilePage";
=======
//import PublicProfile from "./components/users/PublicProfilePage";
>>>>>>> b0fe764b22db40fd543f9f16400405924669c79e
>>>>>>> 0d5874a98e1e07281fe8fdd37c1074a0d5022cdc
import PrivateUserProfile from "./components/users/PrivateUserProfile";
import Test from "./Test";
import FollowerList from "./components/following/followerListPage";
import FollowingList from "./components/following/followingListPage";
import FeedPage from "./components/post/feedPage";
import commentsHome from "./components/comments/commentsHome";
import PrivateUserLikeList from "./components/privateUserLikeList/PrivateUserLikeListPage";

//test change
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/editUserPage" element={<EditUserPage />} />
        <Route path="/privateUserProfile" element={<PrivateUserProfile />} />
        <Route path="/publicProfilePage" element={<PublicProfilePage />} />
        <Route path="/privateUserLikeList" element={<PrivateUserLikeList />}/>
        <Route path="/project-notes/contributors" element={<ContributorList />} />
        <Route path="/project-notes/editContributor/:id" element={<EditContributor />} />
        <Route path="/project-notes/create" element={<CreateContributor />} />
        <Route path="/oldfeed" element={<Feed />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/comments" element={<commentsHome />} />
        
        <Route path = "/test" element = {<Test/>} />
        <Route path = "/followers/:id" element = {<FollowerList/>} />
        <Route path = "/following/:id" element = {<FollowingList/>} />
      </Routes>
    </>
  );
};

export default App;
