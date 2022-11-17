import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const Post = (props) => {
    const  post  = props.record;

    return(
      <Card body outline color="success" className="mx-1 my-2" style={{ width: '30rem' }}>
        <div>Author: {post.author} Date: {post.date} </div>
        <Card.Body> 
            <Stack>
              <div>This where the post text goes.{post.text}</div>
              <div>
                  <Button variant="primary" className="mx-1 my-1" href={`/project-notes/editContributor/${post._id}`} >Comments</Button>
                  <Button variant="primary" className="mx-1 my-1" href={`/project-notes/editContributor/${post._id}`} >Like</Button>
              </div>
            </Stack>
        </Card.Body>
      </Card>
    )
};

export default Post;