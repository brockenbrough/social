import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Post = (username, content, date) => {

    return(
       <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
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