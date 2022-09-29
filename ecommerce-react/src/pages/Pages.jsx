import React from 'react'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import TopCate from '../components/top/TopCate'
import Shop from '../components/shop/Shop'
import Annu from '../components/anouncements/Annu'
import Wrapper from '../components/wrapper/Wrapper'
import Footer from '../common/footer/Footer'

const Pages = ({productItems, addToCart, shopItems}) => {
  return (
    <>
        <Home />
        <FlashDeals productItems = {productItems} addToCart={addToCart}/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Annu/>
        <Wrapper/>
        <Footer/>
    </>
  )
}

export default Pages