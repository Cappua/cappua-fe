import React, { useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "../../UserContext";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../GraphQL/mutations";
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
  const [loginUser, { data }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (user && isAuthenticated) {
      loginUser({
        variables: {
          emailInput: user.email,
          imageInput: user.picture,
          userSubInput: user.sub,
          nameInput: user.name,
        },
      });
    }
  }, [user && isAuthenticated]);

  useEffect(() => {
    if (data) {
      setUserInfo({
        id: data.loginUser.id,
        email: data.loginUser.email,
        image: data.loginUser.image,
        sub: data.loginUser.userSub,
        name: data.loginUser.name,
      });
    }
  }, [data]);

  if (!isAuthenticated) {
    return (
      <button className="auth0" data-cy="login-button" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    );
  }

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
