import React from "react";

const Head = () => {
    return (
        
          <section className="head">
            <div className="container ">
              <div className="left row">
                <i className="fa fa-phone"></i> 
                <label>+9564 3478 1782</label>
                <i className="fa fa-envelope"></i>
                <label>example@company.com</label>
              </div>

              <div className="right row RText">
                 <label>Theme FAQ's</label>
                 <label>Need Helps</label>
                 <span role="img" aria-label="earth">🌎</span>
                 <label htmlFor="">ES</label>
                 <span role="img" aria-label="earth">🌎</span>
                 <label htmlFor="">EN</label>
              </div>

            </div>
          </section>
       
    )
}

export default Head