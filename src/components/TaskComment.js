import { useState } from "react";
import { Form, Input } from "reactstrap";

const TaskComment = ({ id, addComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(id, comment);
    setComment("");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",

        padding: "15px",
      }}
    >
      <Input
        type="text"
        placeholder="Add a comment"
        className="form-control"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="primary my-2">Add Comment</button>
    </Form>
  );
};

export default TaskComment;
