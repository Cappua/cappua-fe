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
  query($id: String!, $userId: String!) {
    competition(id: $id) {
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
        upvoted(userId: $usesrId)
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

export const GET_ALL_COMPETITIONS = gql`
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
        verseType
      }
    }
  }
`;
