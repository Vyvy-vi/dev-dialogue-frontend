import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";
import QuestionList from "../components/QuestionList";

const Home = () => {
  const {
    data: questions,
    isPending,
    error,
  } = useFetch("http://localhost:8000/questions/");
  setInterval(() => {
    window.location.reload();
  }, 10000);
  return (
    <div className="container-fluid m-4">
      <div className="row">
        <div className="col-md-3 col-sm-4 col-12 sidebar position-fixed">
          <ul className="list-unstyled">
            <li>
              <Link to="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/ask">
                <i className="bi bi-question-circle"></i> Post Question
              </Link>
            </li>
            <li>
              <Link to="/myquestions">
                <i className="bi bi-question-diamond"></i> My Questions
              </Link>
            </li>
            <li>
              <Link to="/myanswers">
                <i className="bi bi-clipboard"></i> My Answers
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <i className="bi bi-person"></i> Profile
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-9 col-sm-8 col-12 content offset-3">
          <h1 className="ms-3 font-weight-bold">Welcome to the Q&A Website!</h1>
          {error && <p className="error-message">{error}</p>}{" "}
          {isPending && <p className="loading-message">Loading questions...</p>}
          {questions && <QuestionList questions={questions} />}
          {/* Add a section for popular questions or a search bar if desired */}
        </div>
      </div>
    </div>
  );
};

export default Home;
