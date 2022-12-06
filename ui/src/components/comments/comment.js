import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const Comment = (props) => {
  const comment = props.record;

  return (
    <Card
      body
      outline
      color="success"
      className="mx-1 my-2"
      style={{ width: "30rem" }}
    >
      <Card.Body>
        <Stack>
          <div>
            <h4>{comment.commentContent}</h4>
          </div>
          <div>
            <Button
              variant="primary"
              className="mx-1 my-1"
              href={`/comments/editComment/${comment._id}`}
            >
              Edit
            </Button>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default Comment;
