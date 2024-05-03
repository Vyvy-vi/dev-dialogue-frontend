export const checkUsernameAvailability = async (username) => {
  try {
    const response = await fetch(
      `http://localhost:8000/users?username=${username}`
    );
    const data = await response.json();
    return data.length === 0;
  } catch (error) {
    console.error("Error checking username:", error);
    return false;
  }
};

export const getUserCount = async () => {
  const res = await fetch(`http://localhost:8000/users`);
  return (await res.json()).length;
};

export const getQuestionCount = async () => {
  const res = await fetch(`http://localhost:8000/questions`);
  return (await res.json()).length;
};

export const verifyUser = async (username, password) => {
  const res = await fetch(`http://localhost:8000/users?username=${username}`);
  const user = await res.json();

  if (
    user == null ||
    user.length < 1 ||
    user[0] == null ||
    user[0].password !== password
  )
    return null;
  return user[0];
};

export const createUser = async (userData) => {
  try {
    const response = await fetch(`http://localhost:8000/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...userData }),
    });

    if (!response.ok) {
      throw new Error(`Error creating user: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error("Error creating user:", error);
    return false;
  }
};

export const createQuestion = async (questionData) => {
  try {
    const response = await fetch(`http://localhost:8000/questions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...questionData }),
    });

    if (!response.ok) {
      throw new Error(`Error creating user: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating question:", error);
    return null;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Error updating user: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
};

export const updateAnswerList = async (questionId, newAnswers) => {
  try {
    const response = await fetch(
      `http://localhost:8000/questions/${questionId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: newAnswers }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error updating answer list: ${response.statusText}`);
    }

    const updatedQuestion = await response.json();
    return updatedQuestion;
  } catch (error) {
    console.error("Error updating answer list:", error);
    return false;
  }
};
