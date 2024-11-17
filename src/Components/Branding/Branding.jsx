import React from 'react'
import './Branding.scss'

const Branding = ({ num }) => {
  return (
   <>
    <section className={`branding${num}`} id={`branding${num}`}>
        <div className="container">
                <div className="branding__content">
                    <img src="/designer-team-working-on-creative-design.png" alt="" />
                    <div className="content">
                        <h1>Branding & Design System</h1>
                        <p>Commonly Used In The Graphic, Print & Publishing Industris For Previewing Visual Layout And Mockups</p>
                        <button className='btn'><img src="/Arrow 1.png" alt="" /></button>
                    </div>
                </div>
        </div>
    </section>
   </>
  )
}

export default Branding