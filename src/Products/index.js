import React, {useEffect,useState}  from "react";
import './style.css'
import Navbar from "../Navbar";

const Products = ()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()
    },[])
    console.log({products});
    const getProducts = async () =>{
        try{
            setLoading(true)
            const response = await fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message);
        }
    }
    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <div>
            <Navbar></Navbar>
               <h2>List of Products</h2>
            <div className="product">
         
            {products.map(item=>(
                <div key={item.id}>
                    <img src={item.images[3]}/>
                    <h3>{item.title}</h3>
                    <h4>{item.price}</h4>
                    <h4>{item.discountPercentage}%</h4>
                    <button>View more</button>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Products;