import React from 'react'
import imgFashion from "./category/img1.png"


const Categories = () => {
    const data = [{
        cateImg: imgFashion,
        cateName: "Fashion",
    }
]
  return (
    <>
        <div className="category">
            {
              data.map((value, index)=> {
                return(<div className='box f_flex' key={index}>
                    <img src={value.cateImg} alt="imag-category" />
                    <span>{value.cateName} </span>
                </div>)
              })  
            }
        </div>
    
    </>
  )
}

export default Categories