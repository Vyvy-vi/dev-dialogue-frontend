import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
