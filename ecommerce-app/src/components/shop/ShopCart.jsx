import React, { useState } from 'react'



const ShopCart = ({shopItems, addToCart}) => {
  const [count, setCount] = useState(0)
  const increase = ()=> {
    setCount(count + 1)
  }
  
  return (
    <>
    {shopItems.map((shopItems)=> {
     return ( 
     <div className="box">
       <div className="product mtop">
            <div className="img">
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt="" />
                <div className="product-like">
                    <label htmlFor="">{count}</label><br />
                    <i className='fa-regular fa-heart' onClick={increase}></i>
                </div>
            </div>
            <div className="product-details">
                <h3>{shopItems.name}</h3>
                <div className="rate">
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                </div>
                <div className="price">
                    <h3>${shopItems.price}.00</h3>
                    <button onClick={()=> addToCart(shopItems)} >
                      
                       <i className='fa fa-plus'></i>
                    </button>
                </div>
            </div>
        </div>
      </div>
     ) 
    })}
    
    </>
  )
}

export default ShopCart