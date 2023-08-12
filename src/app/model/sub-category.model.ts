export interface SubCategory {
    _id: string;
    name: string;
    description: string;
    image: string;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
}

export interface SubCategoryResponse {
    message: string;
    payload: SubCategory[];
    totalRecords: number;
}

export interface SubCategoryPayload {
    _id?: string;
    name: string;
    description: string;
}

export interface AddSubCategoryResponse {
    message: string;
    payload: SubCategory;
}

export interface DeleteSubCategoryResponse {
    message: string;
    payload: SubCategory;
}