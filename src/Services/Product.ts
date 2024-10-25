import { TProduct } from '../Types/TProduct'
import instance from '../Configs/Axios'
import { AxiosResponse } from 'axios'

export const getAllProducts = async (params?: any): Promise<AxiosResponse<any>> => {
    try {
        const response = await instance.get('/products', { params })
        return response // []
    } catch (error) {
        return {
            data: [],
            status: 500,
            statusText: 'error',
            config: {} as any,
            headers: {} as any,
            request: {} as any,
        }
    }
} 

export const addProduct = async (product: TProduct) => {
    try {
        const response = await instance.post(`/products`, product, {
            // headers: {
            //     'Content-Type': 'application/json',
            //     "Authorization": "Bearer " + token ? token : ''
            // },
        })
        return response.data
    } catch (error) {
        throw new Error('Error adding product');
    }
}
export const removeProduct = async (product: TProduct): Promise<AxiosResponse<any>> => {
    try {
        const response = await instance.delete(`/products/${product.id}/123`, {
            // headers: {
            //     'Content-Type': 'application/json',
            //     "Authorization": "Bearer " + token ? token : ''
            // },
        })
        return response
    } catch (error: any) {
        throw new Error('Error deleting product');
    }
}
export const editProduct = async (product: TProduct) => {
    try {
        const response = await instance.put(`/products/${product.id}`, product, {
            // headers: {
            //     'Content-Type': 'application/json',
            //     "Authorization": "Bearer " + token ? token : ''
            // },
        })
        return response
    } catch (error) {
        throw new Error('Không kết nối được API. Vui lòng thử lại sau!')
    }
}

