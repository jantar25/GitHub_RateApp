import { gql } from '@apollo/client';

export const CREATE_REPOSITORY = gql`
  mutation {
    repositories {
      ${/* ... */}
    }
  }
`;