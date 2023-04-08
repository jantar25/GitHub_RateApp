import { gql } from '@apollo/client';
import { REPOSITORY_BASE_FIELDS, } from './fragments';

export const GET_REPOSITORIES = gql`
query Query($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy,$searchKeyword: String) {
  repositories(orderDirection: $orderDirection, orderBy: $orderBy,searchKeyword: $searchKeyword) {
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
          reviews {
            edges {
              node {
                id
                rating
                text
                createdAt
                user {
                  id
                  username
                }
              }
            }
          }
        }
      }
`;

export const ME = gql`
query getCurrentUser($includeReviews: Boolean = false) {
  me {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          createdAt
          id
          rating
          repository {
            fullName
            id
            name
            url
          }
          text
          userId
        }
      }
    }
  }
}
`;