import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const Contributor = (props) => {
    const  contributor  = props.record;

    return(
      <Card body outline color="success" className="mx-2 my-2">
        <Card.Body> 
            <Stack> 
            <div>
            {contributor.name}
            <Button variant="dark" href="/public-profile/${contributor.author}" className="mx-1">View</Button>{' '}
            </div>
            {contributor.position}
            </Stack>
            </Card.Body>

      </Card>
    )
};

export default Contributor;