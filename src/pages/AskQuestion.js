import { useState } from "react";
import TextboxInput from "../components/TextBoxInput";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createQuestion, getQuestionCount } from "../utils/api";
import Sidebar from "../components/Sidebar";

const AskQuestion = () => {
  const [title, setTitle] = useState("Enter Title");
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const submitQuestion = async (desc) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      alert("You must me logged in to post questions");
      navigate("/signup");
      return;
    }

    const questionCnt = await getQuestionCount();
    console.log(questionCnt);

    const question = {
      id: questionCnt + 1,
      title: title,
      description: desc,
      author_id: user.id,
      answers: [],
      tags: [],
    };

    console.log(question);

    const new_q = await createQuestion(question);
    console.log(new_q);
    navigate(`/questions/${new_q.id}`);
  };

  return (
    <Container className="question-details">
      <Row>
        <Col>
          <Card>
            <Card.Header as="h2">
              <h1>Ask a Question</h1>
              <input
                type="text"
                value={title}
                x
                onChange={handleTitleChange}
                className="form-control"
              />
            </Card.Header>
            <Card.Body>
              <TextboxInput
                onSubmit={(question) => submitQuestion(question)}
                placeholder="Write your question here..."
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AskQuestion;
