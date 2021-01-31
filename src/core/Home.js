import { useEffect } from "react"
import React, {useState} from 'react'
import get_products from "./helper/coreapi_calls"

export default function Home() {
    const [products, setProducts] = useState([])

    const [error, setError] = useState(false)

    const loadAllProducts = () =>{
        get_products()
        .then((data) => {
            if(data.error){
                setError(data.error)
            }else{
                setProducts(data)
            }
            
        })
    }

    useEffect(() => {
        loadAllProducts();
    }, [])


    return (
        <div className="row">
            {products.map((product, i) =>{
                return (<div className="col-md-4" key={i}>{product.name}</div>)
            })}
        </div>
    )
}

