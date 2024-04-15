//instead of interface we can use type keyword in modern typescript

export type ProductData ={
    productName:string
    price:number
    starRating:number
    productId:number
    productCode:string
    productAvailable:string
    imageUrl: string
}

export type NewProductData = {
    productId: number
    productName:string
    price:number
    starRating:number
    productCode: string
    productAvailable: string
    imageUrl: string
}

export type SavedProductData = {
    productId: number
}