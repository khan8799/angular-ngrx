export interface LoginPayload {
    contact: number;
    password: string;
}

export interface LoginResponse {
    token: string;
    message: string;
    user: User;
}

export interface SignupPayload {
    firstName: string;
    lastName: string;
    email: string;
    contact: number;
    gender: string;
    role: string;
    password: string;
}

export interface AuthResponse {
    message: string;
    payload: User;
}

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    contact: string;
    email: string;
    gender: string;
    isActive: false
    isDeleted: boolean;
    role: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    deletedAt: string;
}