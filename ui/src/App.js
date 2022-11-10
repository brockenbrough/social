import React from "react";
import Comments from "./comments/Comments";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
/*
VIKY'S COMMENT IS HERE
*/
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import ContributorList from "./components/project-notes/contributorList";
import EditContributor from "./components/project-notes/editContributor";
import CreateContributor from "./components/project-notes/createContributor";


//test change
const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/project-notes/contributors" element={<ContributorList />} />
        <Route path="/project-notes/editContributor/:id" element={<EditContributor />} />
        <Route path="/project-notes/create" element={<CreateContributor />} />
      </Routes>
      </div>
        <h1>Sample Comments</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
