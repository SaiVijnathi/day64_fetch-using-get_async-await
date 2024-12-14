import { useState, useEffect } from 'react';
import './App.css';

function App() {

  let [products,setProducts] = useState([]);

  useEffect(()=>{
    onGetProducts();
  },[])

  let onGetProducts = async ()=>{
    console.log("onGetProducts");

    let reqOptions={
      method:"GET",
    }

    let JSONData = await fetch("https://fakestoreapi.com/products", reqOptions);

    let JSOData = await JSONData.json();
    setProducts(JSOData);
    console.log(JSOData);
  };

  return (
    <div className="App">
      <button onClick={()=>{
        onGetProducts();
      }}>Get Products</button>
      <div className='productContainer'>
      {products.map((ele,i)=>{
        return <div className='productDiv'>
        <img src={ele.image} className='productPic' title={ele.description}></img>
        <p>{ele.title}</p>
        <p>${ele.price}</p>
        </div>;
      })}
      </div>
    </div>
  );
}

export default App;
