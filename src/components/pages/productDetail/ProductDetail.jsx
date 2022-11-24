import React from 'react'
import { useParams } from 'react-router-dom'
import { productos } from "../../../productsDispo"


const ProductDetail = () => {

 let{productId}=useParams()
 let productSelected = productos.find(product=> product.id ===productId )
    console.log(productSelected)

  return (
    <h2>Detalle de producto de {productSelected.name}</h2>
  )
}

export default ProductDetail