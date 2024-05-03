import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { checkUsernameAvailability, verifyUser } from "../utils/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const isUsernameAvailable = await checkUsernameAvailability(username);
    if (isUsernameAvailable) {
      setError("Username not found.");
      return;
    }

    const user = await verifyUser(username, password);
    if (user) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      setError("Invalid Username or Password entered. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <h5 className="card-header text-center">LogIn</h5>
        <div className="card-body">
          <Form className="m-10" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mx-auto d-block">
              Log In
            </Button>
            {error && <p className="error">{error}</p>}
            <Link to="/login">
              <p className="text-center mt-3">
                Not registered yet? Click here to Sign Up
              </p>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
