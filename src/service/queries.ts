// lib/queries.ts
import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;


export const REGISTER_USER_MUTATION = gql`
  mutation Register($email: String!, $username: String!, $firstName: String!, $lastName: String!, $userType: String!, $isBusinessAccount: Boolean!,$label:String!, $password1: String!, $password2: String!) {
  register(email: $email, username: $username, firstName: $firstName, lastName: $lastName, userType: $userType, label:$label,isBusinessAccount: $isBusinessAccount, password1: $password1, password2: $password2) {
    success
    errors
    token
    pk
    id
    restToken
  }
}
`;


