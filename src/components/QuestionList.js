import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const QuestionList = ({ questions }) => {
  return (
    <section>
      <h2 className="ms-3">Questions</h2>
      <ul className="question-list m-3">
        {questions.map((question) => (
          <li key={question.id}>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Link
                    className="question-link"
                    to={`/questions/${question.id}`}
                  >
                    <Card.Title>{question.title}</Card.Title>
                  </Link>
                  <span>{question.answers.length} answers</span>
                </div>
                <div className="mt-2">
                  {question.tags.map((tag) => (
                    <span key={tag} className="badge bg-danger me-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default QuestionList;
