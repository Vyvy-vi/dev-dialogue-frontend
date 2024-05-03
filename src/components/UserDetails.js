import React from "react";

const UserDetails = ({ user }) => {
  return (
    <>
      <div className="user-details card m-5">
        <div className="card-header">
          <h2>{user.username}</h2>
        </div>
        <div className="card-body">
          <p className="card-text">Email: {user.email}</p>
          {user.avatar && (
            <img
              src={user.avatar}
              alt="User Avatar"
              className="img-rounded img-thumbnail"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetails;
