import { ROOT_URL } from "../../backend";



import React from 'react'

export default function get_products() {
    return fetch (`http://127.0.0.1:8000/api/products`, {method : "GET"})
    .then((response) =>{
        return response.json()
    }).catch(error => console.log(error))
}
