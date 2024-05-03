import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../utils/api";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSave = async () => {
    const updatedUser = { id: user.id, username, email, password };
    const response = await updateUser(user.id, updatedUser);

    if (!response) {
      alert("Some error occured. Can't update user. Try again.");
    } else {
      alert("User updated");
      localStorage.setItem("user", JSON.stringify(response));
      navigate(window.location.pathname);
    }
  };

  return (
    <>
      {user && (
        <div className="container-fluid m-4">
          <div className="row">
            <Sidebar />
            <div className="col-md-9 col-sm-8 col-12 user-details card offset-3 w-10">
              <div className="card-header">
                <h2>
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    className="form-control"
                  />
                </h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-control"
                  />
                </p>
                <p className="card-text">
                  Password:
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="form-control"
                  />
                </p>
                {user.avatar && (
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="img-rounded img-thumbnail"
                  />
                )}
                <button onClick={handleSave} className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
