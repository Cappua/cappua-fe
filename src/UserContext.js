import React from "react";

const UserContext = React.createContext({
  userInfo: null,
  setUserInfo: () => {},
});

export default UserContext;
