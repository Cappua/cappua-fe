import React, { useContext } from "react";
import UserContext from "../../UserContext";
import { useMutation } from "@apollo/client";
import { UPVOTE, REMOVE_UPVOTE } from "../../GraphQL/mutations";

const Upvote = (props) => {
  const [upvote] = useMutation(UPVOTE);
  const { userInfo } = useContext(UserContext);

  if (userInfo) {
    console.log(userInfo.id);
  }

  const handleUpvote = (event) => {
    const verseId = parseInt(props.verseId);
    const userId = parseInt(props.userId);
    console.log(verseId, userId);
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
