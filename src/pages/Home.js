import React from "react";
import useFetch from "../utils/useFetch";
import QuestionList from "../components/QuestionList";
import Sidebar from "../components/Sidebar";

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
        <Sidebar />

        <div className="col-md-9 col-sm-8 col-12 content offset-3">
          <h1 className="ms-3 font-weight-bold">
            Welcome to DevDialogue: The Q&A Forum!
          </h1>
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
