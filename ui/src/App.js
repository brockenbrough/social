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
import LandingPage from "./components/users/Landingpage";
import Login from "./components/users/Login";
import Signup from "./components/register/Register";
import Feed from "./components/feed/Feed";
import EditUserPage from "./components/users/editUserPage";
import PublicProfilePage from "./components/users/PublicProfilePage";
import PrivateUserProfile from "./components/users/PrivateUserProfile";
import Test from "./Test";
import FollowerList from "./components/following/followerListPage";
import FollowingList from "./components/following/followingListPage";
import FollowCompsTestPage from "./components/following/followComponentsTestPage";
import FeedPage from "./components/post/feedPage";
import CommentList from "./components/comments/commentListPage";
import EditComment from "./components/comments/editComment";
import CreateComments from "./components/comments/createComment";
import { createContext, useState, useEffect } from "react";
import PrivateUserLikeList from "./components/privateUserLikeList/PrivateUserLikeListPage";
import getUserInfo from "./utilities/decodeJwt";
import GetAllPost from "./components/post/getAllPost";
import CreatePost from "./components/post/createPost";

export const UserContext = createContext();
//test change
//test again
const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  return (
    <>
      <Navbar />
      <UserContext.Provider value={user}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/editUserPage" element={<EditUserPage />} />
        <Route path="/privateUserProfile" element={<PrivateUserProfile />} />
        <Route path="/privateUserLikeList" element={<PrivateUserLikeList />} />
        <Route path="/publicProfilePage" element={<PublicProfilePage />} />
        <Route
          path="/project-notes/contributors"
          element={<ContributorList />}
        />
        <Route
          path="/project-notes/editContributor/:id"
          element={<EditContributor />}
        />
        <Route path="/project-notes/create" element={<CreateContributor />} />
        <Route path="/oldfeed" element={<Feed />} />
        <Route path="/feed" element={<FeedPage />} />
     
        <Route path="/comments/comment" element={<CommentList />} />
        <Route path="/comments/editComments/:id" element={<EditComment />} />
        <Route path="/comments/create" element={<CreateComments />} />
        <Route path="/test" element={<Test />} />
        <Route path="/followers/:id" element={<FollowerList />} />
        <Route path="/following/:id" element={<FollowingList />} />
        <Route path="/followCompsTestPage/:id" element={<FollowCompsTestPage />} />
        <Route path="/allpost" element={<GetAllPost />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
      </UserContext.Provider>
    </>
  );
};






export default App;
