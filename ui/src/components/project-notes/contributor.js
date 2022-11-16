import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const Contributor = (props) => {
    const  contributor  = props.record;

    return(
      <Card body outline color="success" className="mx-2 my-2" style={{ width: '30rem' }}>
        <Card.Body> 
            <Stack> 
            <div>
            <h4>{contributor.name}</h4>
            </div>
            <div>
            {contributor.position}
            </div>
            <div>
            <Button variant="primary" href={`/project-notes/editContributor/${contributor.author}`} >View Profile</Button>{' '}
            </div>
            <div>
            <Button variant="primary" href={`/project-notes/editContributor/${contributor._id}`} >Edit</Button>{' '}
            </div>
            </Stack>
            </Card.Body>

      </Card>
    )
};

export default Contributor;