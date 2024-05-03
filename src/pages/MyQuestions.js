import useFetch from "../utils/useFetch";
import QuestionList from "../components/QuestionList";

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
      <section>
        {error && <p>{error}</p>}
        {isPending && <p>Loading questions...</p>}
        {questions && <QuestionList questions={questions} />}
      </section>
    )
  );
};

export default MyQuestion;
