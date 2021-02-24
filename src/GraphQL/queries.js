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
  query competition(id:id) {
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
      upvoted
      voteCount
      user{
        id
        name
        image
      }
    }
  }
`
