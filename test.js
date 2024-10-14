const axios = require('axios');

// Define the mutation
const REGISTER_USER_MUTATION = `
  mutation RegisterUser(
    $label: String,
    $displayName: String,
    $dob: String,
    $use2fa: Boolean,
    $useGoogleAuthenticator: Boolean,
    $email: String!,
    $username: String!,
    $firstName: String!,
    $lastName: String!,
    $userType: String!,
    $isBusinessAccount: Boolean!,
    $password1: String!,
    $password2: String!
  ) {
    register(
      label: $label,
      displayName: $displayName,
      dob: $dob,
      use2fa: $use2fa,
      useGoogleAuthenticator: $useGoogleAuthenticator,
      email: $email,
      username: $username,
      firstName: $firstName,
      lastName: $lastName,
      userType: $userType,
      isBusinessAccount: $isBusinessAccount,
      password1: $password1,
      password2: $password2
    ) {
      id
      token
    }
  }
`;

// Function to register a new user
async function registerUser() {
    const variables = {
        label: "Art Model",
        displayName: "dsds",
        dob: "1990-05-15",
        use2fa: false,
        useGoogleAuthenticator: false,
        email: "adukyerer@gmail.com",
        username: "rich",
        firstName: "adu",
        lastName: "kyere",
        userType: "Model",
        isBusinessAccount: false,
        password1: "password1_value",
        password2: "password2_value"
    };

    try {
        const response = await axios.post('https://uat-api.vmodel.app/graphql/', {
            query: REGISTER_USER_MUTATION,
            variables: variables
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your-auth-token'  // Replace with your actual auth token
            }
        });

        // Handle the response
        console.log('User Registered:', response.data);
    } catch (error) {
        // Handle errors
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

// Call the function
registerUser();
