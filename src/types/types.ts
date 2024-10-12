// types.ts
export type UserType = 'Model' | 'Influencer' | 'Digital Creator' | 'Photographer' | 'Videographer' | 'Pet Model' | 'Stylist' | 'Chef' | 'Cook' | 'Baker' | 'Event Planner' | 'Party Entertainer' | 'Booker' | 'Business';
export type SubCategory =  string;

export interface FormData {
    userType: UserType;
    subCategory: SubCategory;
}




// Define types for the register mutation variables
export interface RegisterUserVariables {
    label?: string;
    displayName?: string;
    dob?: Date;
    use2fa?: boolean;
    useGoogleAuthenticator?: boolean;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userType: string;
    isBusinessAccount: boolean;
    password1: string;
    password2: string;
}

// Define types for the mutation response
export interface RegisterUserResponse {
    register: {
        user: {
            id: string;
            username: string;
            email: string;
            firstName: string;
            lastName: string;
            userType: string;
            isBusinessAccount: boolean;
        };
        token?: string;
    };
}
