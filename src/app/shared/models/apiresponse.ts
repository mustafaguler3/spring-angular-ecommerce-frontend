import { Product } from "./product";

export interface ApiResponse <T> {

    statusCode: number
    message: string
    data: {
        content: T[];
    };
}