import React, { useState, useEffect, Component } from "react"; 
import { useParams, useNavigate } from "react-router";

// Edit Component
export default function Home() {

  const params = useParams();
  const navigate = useNavigate();

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h1>Welcome to the amazing Social Media App!</h1>
      <br></br>
      <h3>Add a Comment</h3>
      {/* <form onSubmit={this.onSubmit} > */}
      <div className="form-group">
        <textarea
          rows="5"
          required
          className="form-control"
          // value={this.state.content}
          placeholder="Type a comment"
          // onChange={this.onChangeContent}
        ></textarea>
        <div className="form-group" align="right">
          <input
            type="submit"
            className="btn btn-dark"
            value="Post Comment"
          ></input>
        </div>
          {/* </form> */}

      </div>
    </div>
  );
}

