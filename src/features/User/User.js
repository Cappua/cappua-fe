import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "../../UserContext";
import "./User.css";

const Profile = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const { setUserInfo } = useContext(UserContext);

  if (user) {
    setUserInfo(user);
  }

  if (!isAuthenticated) {
    return (
      <button className="auth0" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    );
  }

  // useEffect(() => {
  //   setUserInfo(user);
  // }, []);

  return (
    isAuthenticated && (
      <div className="user-info-container">
        <div className="user-info">
          <img id="user-icon" src={user.picture} alt={user.name}></img>
          <i className="fa fa-caret-down"></i>
          <div className="user-dropdown">
            <div className="user-dropdown--item">
              <button
                className="auth0 logout"
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
