import Sidebar from "../components/Sidebar";
import AnswerItem from "../components/AnswerItem";
import useFetch from "../utils/useFetch";

const MyAnswers = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user == null) {
    alert("Please log in to view your answers...");
  }

  const {
    data: questions,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/questions`);
  const answers = questions
    .flatMap((question) => question.answers)
    .filter((answer) => answer.author_id === user.id);

  return (
    <div className="container-fluid m-4">
      <div className="row">
        <Sidebar />
        <div className="offset-3">
          <h1>My Answers</h1>
          {error && <p>{error}</p>}
          {isPending && <p>Loading questions...</p>}
          {answers && (
            <section>
              <ul className="list-group">
                {answers.map((answer) => (
                  <AnswerItem answer={answer} />
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAnswers;
