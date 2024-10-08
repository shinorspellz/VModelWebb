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
  mutation RegisterUser(
    $label: String
    $displayName: String
    $dob: Date
    $use2fa: Boolean
    $useGoogleAuthenticator: Boolean
    $email: String!
    $username: String!
    $firstName: String!
    $lastName: String!
    $userType: String!
    $isBusinessAccount: Boolean!
    $password1: String!
    $password2: String!
  ) {
    registerUser(
      label: $label
      displayName: $displayName
      dob: $dob
      use2fa: $use2fa
      useGoogleAuthenticator: $useGoogleAuthenticator
      email: $email
      username: $username
      firstName: $firstName
      lastName: $lastName
      userType: $userType
      isBusinessAccount: $isBusinessAccount
      password1: $password1
      password2: $password2
    ) 
  }
`;