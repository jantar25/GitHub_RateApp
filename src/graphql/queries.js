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
        }
      }
    }
  }
`;