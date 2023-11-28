import { useState, useEffect } from "react";
import { IProductFromRapid } from "../models/models";




export function useProducts() {
    const [products, setProducts] = useState<IProductFromRapid[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'abdb108e63msh63c3e0348666feep11d309jsn5512031f3b65',
        'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
      }
    };
  
    function addProduct(product: IProductFromRapid) {
      setProducts(prev => [...prev, product])
    }
  
    async function fetchProducts() {
      let response = await fetch('https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens', options)
      if (response.ok) {
        let productsResponse = await response.json()
        setProducts(productsResponse.payload.products) 
      } else { 
        alert("Error " + response.status)
      }
    }
  
    useEffect(() => {
      fetchProducts()
    }, [])
  
    return { products, error, loading, addProduct }
  }