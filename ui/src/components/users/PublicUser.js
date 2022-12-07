import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const PublicUser = (user) => {
  const [user, setUser] = useState({})

    return(
      <Card body outline color="success" className="mx-1 my-2" style={{ width: '30rem' }}>
        <Card.Body> 
            <Stack> 
              <div><h4>{user.name}</h4></div>
              <div>{user.position}</div>
              <div>
                <Button variant="primary" className="mx-1 my-1" href={`/publicProfile/publicprofile/${user._id}`} >Edit</Button>
              </div>
            </Stack>
        </Card.Body>
      </Card>
    )
};

export default PublicUser;