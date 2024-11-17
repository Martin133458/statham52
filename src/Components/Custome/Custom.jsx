import React from 'react'
import './Custom.scss'

const Custom = ({ num }) => {
  return (
    <>
    <section className={`custom${num}`} id={`custom${num}`}>
        <div className="container">
            <div className="custom__content">
                <div className="content">
                    <h1>Custome & Plugin Development</h1>
                    <p>Commonly Used In The Graphic, Print & Publishing Industris For Previewing Visual Layout And Mockups</p>
                    <button className='btn'><img src="/Arrow 1.png" alt="" /></button>
                </div>
                <img src="/businessman-analyzing-data.png" alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Custom