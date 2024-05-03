import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Question from "./pages/Question";
import NavBar from "./components/NavBar";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import MyQuestions from "./pages/MyQuestions";
import MyAnswers from "./pages/MyAnswers";
import AskQuestion from "./pages/AskQuestion";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/me" element={<Profile />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/questions/:id" element={<Question />} />
        <Route path="/myquestions" element={<MyQuestions />} />
        <Route path="/myanswers" element={<MyAnswers />} />
        <Route path="/ask" element={<AskQuestion />} />
      </Routes>
    </>
  );
}

export default App;
