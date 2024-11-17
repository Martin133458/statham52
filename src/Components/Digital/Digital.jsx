import React from 'react'
import './Digital.scss'


const Digital = ({ num }) => {

    
  return (
   <>
   
      <section className={`digital${num}`} id={`digital${num}`}>
        <div className="container">
          <div className="content__wrap">
        <div className="content">
            <h1>Building Digital Products, Brands & Experience</h1>
            <p>Digital Agency Is Your Online Team Mangement Tool That Easy And Prompt</p>
            <button>Contact Us</button>
        </div>
        <img src="/business-people-discussing-business-idea.png" alt="" />
          </div>
      
      </div>
      </section>
        
    
   </>
  )
}

export default Digital