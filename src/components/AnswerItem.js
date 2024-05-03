import { useNavigate } from "react-router-dom";
import useFetch from "../utils/useFetch";
const AnswerItem = ({ answer }) => {
  const {
    data: user,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/users/${answer.author_id}`);
  const navigate = useNavigate();
  return (
    <li key={answer.id} className="list-group-item">
      <p className="lead">{answer.content}</p>
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
    </li>
  );
};

export default AnswerItem;
