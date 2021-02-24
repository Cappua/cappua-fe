import { gql } from "@apollo/client";

export const GET_ALL_VERSES = gql`
  query {
    verses {
      id
      competitionId
      userId
      audioPath
    }
  }
`;
