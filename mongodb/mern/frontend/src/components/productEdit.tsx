import { FC, useState, useCallback, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FieldError, useForm } from "react-hook-form";
import IProduct from "../model/product";
import { NewProductData } from "./types";
import { ValidationError } from "./validationError";
import httpClient from "../apiClient/httpClient";



//we r using react-hook-form because it eases our validations, validations r done asynchronically 
//and it reacts to state changes

type Props = {
    onSave: (newProduct: NewProductData) => void
}

export const ProductEdit:FC<any> = ({onSave}:Props) =>{

    const{id}=useParams<string>()// react hook that will help us to read path parameter... it will give the id

    const  [product,setProduct]= useState<IProduct>({} as IProduct) //{} initializing with an empty oject

    const getProductById= useCallback(async()=>{  
        const response =await httpClient.getById('http://localhost:4200/products',Number(id)) //converting id to number
        setProduct(response)

        },[]
    )
    useEffect(()=>{
        getProductById()
    },[])



    const {register, setValue, handleSubmit, formState:{errors, isSubmitting, isSubmitSuccessful}} = useForm<NewProductData>()
    //useForm is being destructured over here {errors, isSubmitting, isSubmitSuccessful}
    //this register helps to bind the object in the form 

    setValue('productName',product.productName)
    setValue('price',product.price)
    setValue('starRating',product.starRating)
    setValue('productId', product.productId)
    setValue('imageUrl', product.imageUrl)
    setValue('productCode', product.productCode)
    setValue('productAvailable', product.productAvailable)

    const fieldStyle = 'flex flex-col mb-2'
    function getEditorStyle(fieldError: FieldError| undefined){
        return fieldError ? 'border-red-500':''
    }
    return(// noValidate will disable the default form validation
        <form noValidate className="border-b py-4" onSubmit={handleSubmit(onSave)}>
            <div className={fieldStyle}>
                <label htmlFor="productName">ProductName</label>
                <input id = "productName" {...register('productName',{
                    required:'You must enter a productName'
                })} className={getEditorStyle(errors.productName)} />
                <ValidationError fieldError={errors.productName} />
            </div>

            <div className={fieldStyle}>
                <label htmlFor="price">ProductPrice</label>
                <input id = "price" {...register('price',{
                    required:'You must enter a price'
                })} className={getEditorStyle(errors.price)} />
                <ValidationError fieldError={errors.price} />
            </div>

            <div className={fieldStyle}>
                <label htmlFor="starRating">Rating</label>
                <input id = "starRating" {...register('starRating',{
                    required:'You must enter a price'
                })} className={getEditorStyle(errors.starRating)} />
                <ValidationError fieldError={errors.starRating} />
            </div>

            <div className={fieldStyle}>
                <button type="submit" disabled={isSubmitting}
                className="mt-2 h-10 px-6 font-semibold bg-black text-white">
                    Update
                </button>
            </div>


        </form>
    )
}