import useFetch from "../utils/useFetch";
import QuestionList from "../components/QuestionList";
import Sidebar from "../components/Sidebar";

const MyQuestion = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user == null) {
    alert("Please log in to view your questions...");
  }

  const {
    data: questions,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/questions?author_id=${user.id}`);
  return (
    user && (
      <div className="container-fluid m-4">
        <div className="row">
          <Sidebar />
          <section className="offset-3">
            {error && <p>{error}</p>}
            {isPending && <p>Loading questions...</p>}
            {questions && <QuestionList questions={questions} />}
          </section>
        </div>
      </div>
    )
  );
};

export default MyQuestion;
