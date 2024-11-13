import React, { useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";

import axios from "axios";

const Mynotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
    }
  };
  const fetchNotes = async () => {
    const response = await axios.get("http://localhost:5000/api/notes");
    console.log(response);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <MainScreen title=" Welcome back Rajasva Raj">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  fontSize: 18,
                  alignSelf: "center",
                }}
              >
                <Accordion.Header as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Header>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default Mynotes;
