import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    const {coffeeId} = useParams()
    const {product, setProduct} = useState([])

    const getData=()=>{
        setTimeout(()=>{
            const products = CoffeeAPI
            setProduct(products)
        },2000)
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <Fragment>
        <ItemDetail/>
    </Fragment>
  )
}
