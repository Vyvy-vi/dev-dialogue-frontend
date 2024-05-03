import React from "react";
import useFetch from "../utils/useFetch";
import { Card, Container, Row, Col } from "react-bootstrap";
import TextboxInput from "./TextBoxInput";
import { useNavigate } from "react-router-dom";
import { updateAnswerList } from "../utils/api";
import AnswerItem from "./AnswerItem";

const QuestionDetails = ({ question }) => {
  const {
    data: user,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/users/${question.author_id}`);
  const navigate = useNavigate();

  const submitAnswer = async (answer) => {
    const user = localStorage.getItem("user");
    if (user == null) {
      alert("You must me logged in to post answers");
      navigate("/signup");
      return;
    }

    question.answers.push({
      id: question.answers.length + 1,
      author_id: JSON.parse(user).id,
      content: answer,
    });

    const new_q = await updateAnswerList(question.id, question.answers);
    if (new_q != null) {
      navigate(window.location.pathname);
    }
  };

  return (
    <Container className="question-details">
      <Row>
        <Col>
          <Card>
            <Card.Header as="h2">{question.title}</Card.Header>
            <Card.Body>
              {question.description && (
                <p className="lead">{question.description}</p>
              )}
              {error && <p className="text-danger">{error}</p>}
              {isPending && <p>Loading author...</p>}
              {user && (
                <p
                  onClick={() => {
                    navigate(`/users/${user.id}`);
                  }}
                  className="user-link text-primary cursor-pointer"
                  aria-label="Click to view user profile"
                >
                  <em>Written by: {user.username}</em>
                </p>
              )}
              <TextboxInput
                onSubmit={(answer) => submitAnswer(answer)}
                placeholder="Write your answer here..."
                label="Write an Answer"
              />

              {question.answers && (
                <section>
                  <h3>Answers</h3>
                  <ul className="list-group">
                    {question.answers.map((answer) => (
                      <AnswerItem answer={answer} />
                    ))}
                  </ul>
                </section>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionDetails;
