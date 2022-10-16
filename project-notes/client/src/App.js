import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import ContributorList from "./components/contributorList";
import EditContributor from "./components/editContributor";
import CreateContributor from "./components/createContributor";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<ContributorList />} />
        <Route path="/editContributor/:id" element={<EditContributor />} />
        <Route path="/create" element={<CreateContributor />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
