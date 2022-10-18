import React, { useState } from "react";
import { useNavigate } from "react-router";
import NavbarContributor from "./navbarContributor";

export default function CreateContributor() {
  // We define the state for the form.
  const [form, setForm] = useState({
    name: "",
    position: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  // It is called with a specific value (name, position or level) that changed.
  // We update the state of the form.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:8095/project_notes/contributor/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ name: "", position: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  // We refer to the functions we defined above for handling form changes.
  return (
    <div>
      <NavbarContributor/>
      <h3>Create Contributor</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ position: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
