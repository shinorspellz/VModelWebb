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


export  const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const REGISTER_USER_MUTATION = gql`
  mutation Register(
    $label: String!
    $displayName: String!
    $dob: Date!
    $use2fa: Boolean!
    $useGoogleAuthenticator: Boolean!
    $email: String!
    $username: String!
    $firstName: String!
    $lastName: String!
    $userType: String!
    $isBusinessAccount: Boolean!
    $password1: String!
    $password2: String!
  ) {
    register(
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
    ) {
      success
    }
  }
`;


