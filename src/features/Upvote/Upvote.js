import React, { useContext } from "react";
import UserContext from "../../UserContext";
import { useMutation } from "@apollo/client";
import { UPVOTE, REMOVE_UPVOTE } from "../../GraphQL/mutations";
import "./Upvote.css";

const Upvote = (props) => {
  const [upvote] = useMutation(UPVOTE);
  const { userInfo } = useContext(UserContext);

  const handleUpvote = (event) => {
    const verseId = parseInt(props.verseId);
    const userId = parseInt(props.userId);
    upvote({ variables: { verseId: verseId, userId: userId } });
    const voteConfirmed = window.confirm("You vote has been recorded!");
    if (voteConfirmed === true) {
      window.location.reload();
    }
  };

  const showPleaseLoginMessage = () => {
    alert("Please login to vote!");
  };

  return (
    <div className="upvote-container">
      {userInfo && (
        <i
          className="fas fa-heart vote-icon"
          id={props.userId}
          onClick={(event) => {
            handleUpvote(event);
          }}></i>
      )}
      {!userInfo && (
        <i
          className="fas fa-heart vote-icon"
          id={props.userId}
          onClick={() => {
            showPleaseLoginMessage();
          }}></i>
      )}
    </div>
  );
};

export default Upvote;
