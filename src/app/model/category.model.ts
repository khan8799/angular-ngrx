export interface Category {
    _id: string;
    name: string;
    description: string;
    image: string;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
    products: any[]
}

export interface CategoryResponse {
    message: string;
    payload: Category[];
    totalRecords: number;
}

export interface CategoryPayload {
    _id?: string;
    name: string;
    description: string;
}

export interface AddCategoryResponse {
    message: string;
    payload: Category;
}

export interface DeleteCategoryResponse {
    message: string;
    payload: Category;
}