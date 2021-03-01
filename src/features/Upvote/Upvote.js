import React, { useContext } from "react";
import UserContext from "../../UserContext";
import { useMutation } from "@apollo/client";
import { UPVOTE, REMOVE_UPVOTE } from "../../GraphQL/mutations";

const Upvote = (props) => {
  const [upvote] = useMutation(UPVOTE);
  const { userInfo } = useContext(UserContext);

  const handleUpvote = (event) => {
    const verseId = parseInt(props.verseId);
    const userId = parseInt(props.userId);
    upvote({ variables: { verseId: verseId, userId: userId } });
  };

  return (
    <div
      className="upvote-container"
      onClick={(event) => {
        handleUpvote(event);
      }}>
      <i className="fas fa-heart vote-icon" id={props.userId}></i>
    </div>
  );
};

export default Upvote;
