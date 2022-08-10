import React from 'react'
import Dcart from './Dcart'

function Discount() {
  return (
    <>
    <section className='discount-background newarrivals'>
        <div className="container-discount">
            <div className="heading .d_flex">
                <div className="heading-left row f_flex">
                <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                    <h2>Big Discount</h2>
                </div>
                <div className="heading-right row">
                    <span>Wiew All</span>
                    <i className="fa fa-caret-right"></i>
                </div>
            </div>     
        </div>
    </section>
    <Dcart/>
    </>
  )
}

export default Discount