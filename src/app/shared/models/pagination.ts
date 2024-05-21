import { Product } from "./product";

export interface Pagination {
    data: Product[]
    total: number
    pageNumber: number
    pageSize: number
}