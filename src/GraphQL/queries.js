import { gql } from "@apollo/client";

export const GET_ALL_VERSES = gql`
  query {
    verses {
      id
      competitionId
      userId
      audioPath
      title
      user {
        id
        name
        image
        email
      }
      voteCount
    }
  }
`;

export const GET_VERSES_BY_COMPETITION = gql`
  query Compeition($month: Int!, $userId: Int!) {
    competition(month: $month) {
      id
      trackPath
      month
      year
      description
      genre
      rules
      verses {
        id
        audioPath
        title
        upvoted(userId: $userId)
        voteCount
        user {
          id
          name
          image
        }
      }
    }
  }
`;

export let GET_ALL_COMPETITIONS = gql`
  query {
    competitions {
      id
      trackPath
      month
      year
      description
      genre
      rules
      verses {
        id
        audioPath
        title
        voteCount
        user {
          id
          name
          image
        }
      }
    }
  }
`;
