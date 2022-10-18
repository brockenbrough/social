import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

// Edit Component
export default function Home() {

  const params = useParams();
  const navigate = useNavigate();

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h1>The Incredible Social Media App!</h1>
    </div>
  );
}
