import React,{ useState}from "react";


let Product =()=>{
    let [product, setProduct] = useState({
        product_Name: "Grabo G106  (Dark Blue)",
        price: 659,
        image:
          "https://rukminim1.flixcart.com/image/312/312/k6jnfrk0/mobile/6/2/s/grabo-g106-g106-original-imafzynazsfhmbgj.jpeg?q=70",
        qty: 0,
      });
    return (
        <>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-8">
        <table className="table table-hover table-striped">
        <thead>
        <tr>
        <th>product name</th>
        <th>image</th>
        <th>quality</th>
        <th>price</th>
        <th>total</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{product.product_Name}</td>
          <td> <img src={product.image} height="150px" width="90px" /></td>
          <td>
            <i className="fa fa-minus-circle" onClick={() => {setProduct({ ...product, qty: product.qty - 1 });}}></i>
            {product.qty}
            <i className="fa fa-plus-circle"onClick={() => {setProduct({ ...product, qty: product.qty + 1 });}}></i>
          </td>
          <td>{product.price}</td>
          <td>{product.qty * product.price}</td>
        </tr>
      </tbody>
        </table>
          </div>
          </div>
          </div>


        </>
    )
} 
export default Product; 