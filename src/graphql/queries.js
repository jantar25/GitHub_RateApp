import { gql } from '@apollo/client';
import { REPOSITORY_BASE_FIELDS, } from './fragments';

export const GET_REPOSITORIES = gql`
query Query($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy,$searchKeyword: String,$first: Int) {
  repositories(orderDirection: $orderDirection, orderBy: $orderBy,searchKeyword: $searchKeyword,first: $first) {
      edges {
        cursor
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
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
`;

export const GET_REPOSITORY = gql`
query Query($id: ID!,) {
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
          reviews(first: 3,after:"WzE2Nzg1NTUyMzQ2NjYsIjc1M2YzZTk5LWU3M2EtNDNhMy05YTUwLWIzMGQ3NzI3YzBlYi5qYXJlZHBhbG1lci5mb3JtaWsiXQ==") {
            totalCount
            edges {
              node {
                id
                text
                rating
                createdAt
                repositoryId
                user {
                  id
                  username
                }
              }
              cursor
            }
            pageInfo {
              endCursor
              startCursor
              hasNextPage
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

