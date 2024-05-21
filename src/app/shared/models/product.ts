import { Brand } from "./brand"
import { Type } from "./type"

export interface Product {
    id: number
    name: string
    description: string
    price: string
    pictureUrl:string
    brand: Brand
    type: Type
}
