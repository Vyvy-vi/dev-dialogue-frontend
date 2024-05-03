import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import QuestionDetails from "../components/QuestionDetails";
const Question = () => {
  const { id } = useParams();

  const {
    data: question,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/questions/${id}`);

  return (
    <section>
      {error && <p>{error}</p>}
      {isPending && <p>Loading question...</p>}
      {question && <QuestionDetails question={question} />}
    </section>
  );
};

export default Question;
