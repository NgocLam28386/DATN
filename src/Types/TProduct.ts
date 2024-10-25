export interface TProduct {
    id?: Number,
    name: string,
    category: string,
    price: Number,
    description: string,
    countInStock?: number
    discount?: number
}