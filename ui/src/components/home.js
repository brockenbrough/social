import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

// Edit Component
export default function Home() {

  const params = useParams();
  const navigate = useNavigate();

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h1>Welcome to the Social Media App part 2!</h1>
    </div>
  );
}
