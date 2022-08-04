import React from 'react'
import cat_1 from "./images/category/cat1.png"
import cat_2 from "./images/category/cat2.png"
import cat_3 from "./images/category/cat3.png"
import cat_4 from "./images/category/cat4.png"
import cat_5 from "./images/category/cat5.png"
import cat_6 from "./images/category/cat6.png"
import cat_7 from "./images/category/cat7.png"
import cat_8 from "./images/category/cat8.png"
import cat_9 from "./images/category/cat9.png"
import cat_10 from "./images/category/cat10.png"
import cat_11 from "./images/category/cat11.png"

const Categories = () => {
    const data = [
      {
        cateImg: cat_1,
        cateName: "Fashion",
        
      },
      {
        cateImg: cat_2,
        cateName: "Electronic",
      },
      {
        cateImg: cat_3,
        cateName: "Cars",
      },
      {
        cateImg: cat_4,
        cateName: "Home & Garden",
      },
      {
        cateImg: cat_5,
        cateName: "Gifts",
      },
      {
        cateImg: cat_6,
        cateName: "Music",
      },
      {
        cateImg: cat_7,
        cateName: "Health & Beauty",
      },
      {
        cateImg: cat_8,
        cateName: "Pets",
      },
      {
        cateImg: cat_9,
        cateName: "Baby & Toys",
      },
      {
        cateImg: cat_10,
        cateName: "Groceries",
      },
      {
        cateImg: cat_11,
        cateName: "Books",
      },
    ]
  return (
    <>
        <div className="category">
            {
              data.map((value, index)=> {
                return(<div className='box f_flex' key={index}>
                    <img src={value.cateImg} alt="" />
                    <span>{value.cateName} </span>
                </div>)
              })  
            }
        </div>
    
    </>
  )
}

export default Categories