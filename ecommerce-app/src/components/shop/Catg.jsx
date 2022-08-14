import React from 'react'

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Sonny",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Lenovo",
    },
    {
      cateImg: "./images/category/cat-4.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-5.png",
      cateName: "Motorola",
    },
    {
      cateImg: "./images/category/cat-6.png",
      cateName: "Redmi",
    },
    {
      cateImg: "./images/category/cat-7.png",
      cateName: "Samsumg",
    },
  ]
  return (
    
   <>
    <div className="category">
       <div className="chead d_flex">
          <h1>Brands</h1>
          <h1>Shops</h1>
       </div>
       {
        data.map((value, index)=> {
             return (
               <div className="box f_flex" key={index}>
                 <img src={value.cateImg} alt="" />
                 <span>{value.cateName}</span>
               </div>
             )
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
    </div>
  </>
  )
}

export default Catg