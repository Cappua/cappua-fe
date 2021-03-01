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
      name
      email
    }
  }
`;
