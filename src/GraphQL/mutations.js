import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser(
    $emailInput: String!
    $imageInput: String!
    $userSubInput: String!
    $nameInput: String!
  ) {
    loginUser(
      input: {
        email: $emailInput
        image: $imageInput
        userSub: $userSubInput
        name: $nameInput
      }
    ) {
      id
      email
      image
      userSub
      name
    }
  }
`;

export let UPVOTE = gql`
  mutation CreateVote($verseId: ID!, $userId: ID!) {
    createVote(input: { verseId: $verseId, userId: $userId }) {
      id
      userId
      verseId
    }
  }
`;

