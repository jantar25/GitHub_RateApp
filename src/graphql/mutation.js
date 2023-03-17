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
