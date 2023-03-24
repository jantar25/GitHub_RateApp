import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          forksCount
          ownerAvatarUrl
          description
          language
          stargazersCount
          reviewCount
          ratingAverage
          url
        }
      }
    }
  }
`;

export const ME = gql`
query Query {
  me {
    id
    username
  }
}
`;