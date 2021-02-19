import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./User.css";

const Profile = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (!isAuthenticated) {
    return (
      <button
        className="auth0"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    );
  }
console.log(user);
  return (
    isAuthenticated && (
      <>
        <div className="user-info">
          <img id="user-icon" src={user.picture} alt={user.name} />
          <h2 id="userName">{user.name}</h2>
          {/* <p> id="userEmail{user.email}</p> */}
        </div>
        <button
          className="auth0 logout"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      </>
    )
  );
};

export default Profile;
