import { useContext, useState } from "react"
import { createContext } from "react"
import { ProductItem } from "../models/ProductModels"

interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    FeaturedProducts: ProductItem[]
    FlashSaleProducts_1: ProductItem[]
    FlashSaleProducts_2: ProductItem[]
    getProduct: (articleNumber?: string) => void
    getProducts: () => void
    getFeaturedProducts: (take?: number) => void
    getFlashSaleProducts_1: (take?: number) => void
    getFlashSaleProducts_2: (take?: number) => void
    
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => {return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl: string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = { tag: '', articleNumber:'', name:'', description: '', category:'', price: 0,  imageName:'' }  
    
    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [FeaturedProducts, setFeaturedProducts] = useState<ProductItem[]>([])
    const [FlashSaleProducts_1,  setFlashSaleProducts_1] = useState<ProductItem[]>([])
    const [FlashSaleProducts_2,  setFlashSaleProducts_2] = useState<ProductItem[]>([])
     
    const getProduct = async (articleNumber?: string) => {
        if(articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }
    
    const getFeaturedProducts = async (take: number = 0) => {
        let url = `${baseUrl}/featured`
        
        if (take !== 0)
            url += `/${take}`
        
        const res = await fetch(url)
        setFeaturedProducts(await res.json())
    }

    const getFlashSaleProducts_1 = async (take: number = 0) => {
        let url = `${baseUrl}/flashsale_1`
        
        if (take !== 0)
            url += `/${take}`
        
        const res = await fetch(url)
        setFlashSaleProducts_1(await res.json())
    }

    const getFlashSaleProducts_2 = async (take: number = 0) => {
        let url = `${baseUrl}/flashsale_2`
        
        if (take !== 0)
            url += `/${take}`
        
        const res = await fetch(url)
        setFlashSaleProducts_2(await res.json())
    }

    return <ProductContext.Provider value={{product, products, FeaturedProducts, FlashSaleProducts_1, FlashSaleProducts_2, getFlashSaleProducts_1, getFlashSaleProducts_2, getProduct, getProducts, getFeaturedProducts}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider
