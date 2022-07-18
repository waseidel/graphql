import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Register(
    $registerInput: RegisterInput!
  ) {
    register(
      registerInput: $registerInput
    ){
      user {
        id
        firstName
        lastName
        email
      }
      token
    }
  }
`

export const LOGIN_USER = gql`
  mutation login($loginInput: LoginInput!){
    login(loginInput: $loginInput) {
      user {
        id
        firstName
        lastName
        email
      }
      token
    }
  }
`

export const VALIDATE_TOKEN = gql`
  query validateToken {
    validateToken
  }
`