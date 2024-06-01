import { Product } from "./product";

export interface ApiResponse <T> {

    statusCode: number
    message: string
    data: {
        content: T[];
        pageable: {
            pageNumber: number// The current page number (0-indexed).
            pageSize: number //  Number of items per page
            totalPages: number//2
            totalElements: number// 18
        }
    };
    
}