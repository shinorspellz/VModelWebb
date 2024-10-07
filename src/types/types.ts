// types.ts
export type UserType = 'Admin' | 'User' | 'Guest';
export type SubCategory = 'Category1' | 'Category2' | 'Category3';

export interface FormData {
    userType: UserType;
    subCategory: SubCategory;
}
