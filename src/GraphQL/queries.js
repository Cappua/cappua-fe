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

export let GET_VERSES_BY_COMPETITION = gql`
  query {
    competition(id: 1) {
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
        upvoted(userId: 1)
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
// query {
//   competition(id: $id) {
//     id
//     trackPath
//     month
//     year
//     description
//     genre
//     rules
//     verses {
//       id
//       audioPath
//       title
//       upvoted(userId: $usesrId)
//       voteCount
//       user {
//         id
//         name
//         image
//       }
//     }
//   }
// }
export let GET_ALL_COMPETITIONS = gql`
  query {
    competition {
      id
      trackPath
      month
      year
      description
      genre
      rules
      verses
    }
  }
`;
