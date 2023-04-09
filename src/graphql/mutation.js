import { gql } from '@apollo/client';

// export const CREATE_REPOSITORY = gql`
//   mutation {
//     repositories {
//       ${/* ... */}
//     }
//   }
// `;

export const LOGIN = gql`
mutation Mutation($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`
export const CREATE_REVIEW = gql`
mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    repositoryId
  }
}
`
export const CREATE_USER = gql`
mutation Mutation($user: CreateUserInput) {
  createUser(user: $user) {
    id
    username
  }
}
`

export const DELETE_REVIEW = gql`
mutation Mutation($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`