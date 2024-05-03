import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import {
  checkUsernameAvailability,
  createUser,
  getUserCount,
} from "../utils/api";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const isUsernameAvailable = await checkUsernameAvailability(username);
    if (!isUsernameAvailable) {
      setError("Username already exists. Please choose another one.");
      return;
    }

    const userData = {
      id: (await getUserCount()) + 1,
      username,
      email,
      password,
    };

    const userCreated = await createUser(userData);
    if (userCreated) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      setError(
        "An error occurred while creating your account. Please try again."
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <h5 className="card-header text-center">Sign Up</h5>
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mx-auto d-block">
              Sign Up
            </Button>
            {error && <p className="error">{error}</p>}
            <Link to="/login">
              <p className="text-center mt-3">
                Already registered? Click here to Login
              </p>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
