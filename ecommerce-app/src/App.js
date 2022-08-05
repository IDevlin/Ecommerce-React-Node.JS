import React, { useState } from "react"
import "./App.css"
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Cart from "./common/cart/Cart";

function App() {
 // step 1: fetch data from database
  const {productItems} = Data

  const [cartItem, setCardItem] = useState([])
  console.log(cartItem)
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
     console.log(productExit)
    if(productExit){
      setCardItem(cartItem.map((item) => 
      (item.id === product.id? {...productExit, qty:productExit.qty + 1 }: item)))
    }else{
      setCardItem([...cartItem,{...product, qty: 1}])
    }
  }
  return (
    <>
      
      <Router>
      <Header cartItem={cartItem}/>
  
      <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart}/>
  </Route>
  <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart}/>
  </Route>
        </Switch>
    </Router>
      </>
    
  )
}

export default App;
