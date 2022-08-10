import React from 'react'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import TopCate from '../components/top/TopCate'

const Pages = ({productItems, addToCart}) => {
  return (
    <>
        <Home />
        <FlashDeals productItems = {productItems} addToCart={addToCart}/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
    </>
  )
}

export default Pages