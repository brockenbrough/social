import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditUserPage = ({children}) =>{
    const [show, toggleShow] = useState(true);
return(
  <Form>
  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter new email" />
    <Form.Text className="text-muted">
      Placeholder.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="username">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter new username" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter new password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button variant="primary" type="cancel">
    Cancel
  </Button>
</Form>
)

}

export default EditUserPage;