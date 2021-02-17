import React from "react";
import "./Login.css";
import { useRef } from "react";

export default function LogIn() {
  let passwordRef = useRef();
  let userNameRef = useRef();
  let passRef = useRef();
  let failRef = useRef();

  const username = "cappua";
  const password = "wutang";

  const onClick = (event) => {
    event.preventDefault();
    if (
      passwordRef.current.value === password &&
      userNameRef.current.value === username
    ) {
      passRef.current.classList.remove("hidden");
    } else {
      failRef.current.classList.remove("hidden");
    }
    setTimeout(() => {
      return;
    }, 5000);
  };

  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="login-title">Welcome</h3>
        <form>
          <div className="input-group">
            <label for="name">Username</label>
            <input
              id="name"
              type="text"
              autoComplete="username"
              spellCheck="true"
              ref={userNameRef}
            />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              ref={passwordRef}
            />
          </div>
          <button className="login" onClick={onClick}>
            <span>Sign In</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                className="hidden"
                ref={passRef}
                d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.288-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"
              />
              <path className="hidden" ref={failRef} d="x" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
