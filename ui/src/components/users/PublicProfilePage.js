import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


// display of public user - EA
export default function ShowPublicUser() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const params = useParams();
  const navigate = useNavigate();
// with useEffect we will fetch the id of all the public users - EA
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:8095/ui/PublicUser/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);
// methods
  // These methods will update the state properties.
  // The value is an object like {name: "Jose"} identifying field and new value.

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <NavbarContributor/>

      <Card body outline color="success" className="mx-1 my-2" style={{ width: '30rem' }}>
        <Card.Body> 
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" 
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
             />
          </Form.Group>
      
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
        </Card.Body>
      </Card>

    </div>
  );
}
