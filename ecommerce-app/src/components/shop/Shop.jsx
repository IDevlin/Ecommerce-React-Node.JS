import React from 'react'
import Catg from './Catg'
import ShopCart from './ShopCart'

function Shop() {
  return (
    <>
    <section className='shop background'>
         <div className="container .d_flex">  
            <Catg/>

            <div className="contentWidth">
              <div className="heading .d_flex">
                <div className="heading-left row f_flex">
                      <h2>Mobile phones</h2>
                </div>
                <div className="heading-right row">
                    <span>Wiew All</span>
                    <i className="fa fa-caret-right"></i>
                </div>
              </div>
              <div className="product-content .grid">
               <ShopCart/>
              </div>
            </div>
         </div>
    </section>
    </>
  )
}

export default Shop