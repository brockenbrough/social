import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateComment() {
  const [form, setForm] = useState({
    comment: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newComment = { ...form };

    await fetch("http://localhost:5000/comments/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ comment: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h1>Welcome to the amazing Social Media App!</h1>
      <br></br>
      <h3>Add a Comment</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <textarea
            rows="5"
            required
            className="form-control"
            id="comment"
            value={form.name}
            placeholder="Type a comment"
            onChange={(e) => updateForm({ name: e.target.value })}
          ></textarea>
          <div className="form-group" align="right">
            <input
              type="submit"
              className="btn btn-dark"
              value="Post Comment"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
