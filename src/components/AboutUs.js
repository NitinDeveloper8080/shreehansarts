import React from 'react'
import "../custom.css"
import { banner } from '../constants'
const AboutUs = () => {
 return <>
   <div className="banner">
    <img src="/shreehansImages/Frame 78 (1).png    " style={{height: 318}} />
  </div>
  <div className="banner-text">
    <h1 className="film">About Us</h1>
  </div><br /><br />
  <div className="first-section">
    <h1>Our Story</h1>
    <p>Founded in 2020 by <b>Dr Neeraj Kumar Gupta</b> and
      <b> &nbsp;Preeti Gupta</b>, Shreehans Arts and Creations is a fully
      integrated
      studio
      that aims to produce definitive works and leaves a prolific experience for the audience of modern Indian
      cinema.
    </p>
    <br />
  </div>
  <div className='container'>
  <div className="our-story-text">
    <div className="our-story-text-left">
      <p>Over the years, Shreehans Arts and Creations has established itself as one of the most sought-after film
        and production
        companies in North India. From Film Making to Media Consultancy, Shreehans covers all of it.
        We always strive to explore new markets, some of which include Hindi, Punjabi and Haryanvi dialects. We
        haven’t been a
        roaring box office hit initially, but with diligence and eternal commitment over the years, we have
        generated subsequent
        impact in the market.</p>
    </div>
    <br />
    <div className="our-story-text-right">
      <p><b>Some of the best-known artists:</b> Anup Jalota, Raghuvir Yadav, Karan Razdan, and Raj Gopal Iyer,
        have
        yielded
        their
        artistic skills and made our projects a classic hit. With the changing time, the company looks forward
        to
        integrating
        creative storytelling with state-of-the-art technology and setting a benchmark for the future. The
        company
        has built its
        reputation with powerful storytelling backed by originality, quality and details. We believe in creating
        immersive
        content that enchants people and imparts a cohesive experience to our audience.</p>
    </div>
  </div>
  <div className="goal">
    <div className="our-mission">
      <h1>Our Mission</h1>
      <p>“To empower artists and create works that think, feel and connect with the audience of modern India.”</p>
    </div>
    <div className="our-vission">
      <h1>Our Vision</h1>
      <p>“To be a company that creatively inspires and enriches people with the new array of the changing world.”
      </p>
    </div>
  </div>
  <div className="director">
    <div className="director-message">
      <h1>Director's Message</h1>
      <p>"With Flexibility and Resilience, Shreehans has consistently pushed its boundaries and aimed to provide
        rich, innovative
        stories to its audience. With creative storytelling, technology, quality and detail, we look forward to
        touching
        people's lives across boundaries."</p>
    </div>
    <div className="director-image">
      <img src="img/director_image.jpg" alt />
    </div>
  </div>
  </div>



 </>
}

export default AboutUs