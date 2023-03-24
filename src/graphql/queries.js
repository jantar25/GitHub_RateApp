import { gql } from '@apollo/client';
import { REPOSITORY_BASE_FIELDS, } from './fragments';

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

export const GET_REPOSITORY = gql`
query Query($id: ID!) {
  repository(id: $id) {
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
`;

export const ME = gql`
query Query {
  me {
    id
    username
  }
}
`;