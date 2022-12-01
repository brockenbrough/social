import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

  const Post = ({username, content,date}) => {
    return(
       <div className='d-inline-flex p-2'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{username}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <div class = "text-center">
                        <Button variant="outline-danger">Like</Button> 
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default Post;