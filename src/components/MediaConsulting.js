import React from 'react'
import { banner } from '../constants/index'
import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const MediaConsulting = () => {
 return <>
<div className='mt-3'>
  <div className="banner"> 
    <img src={banner} />
  </div>
  <div className="banner-text">
    <h1 className="head">Media Consulting</h1>
   <NavLink to='/' className='text-decoration-none text-warning' > <IoHome />  &nbsp; Home</NavLink>  <MdKeyboardArrowRight /> Services <MdKeyboardArrowRight/> Media Consulting
    
  </div><br /><br />
  <section className="container">
    <h1 className="media"> Media Consultancy And The Digitally Transforming World</h1><br /><br />
    <p className="mediapara">We live in the age of technology where everything has direct links to digitalization and all the social media platforms. 
      For your work to be recognized by the people, you must understand that virtual existence will play an essential role in it. 
      Be it social media platforms or online film festivals, and you require a team to help you with promotion.</p><br /><br />
    <p className="mediapara">
      At Shreehans Arts And Creations, we provide all the services you may require to boost your project with the latest strategies for advertising and marketing. 
      Our skilled SEO professionals will handle your accounts with the help of proactive
      CRM and make sure to come up with advertising strategies based on the latest trends and user-engaging criteria.
    </p><br /><br />
    <h1 className="media">Responsibilities Of Media Consultant</h1><br /><br />
    <p className="mediapara">Shreehans Films provides Media Consultancy consisting of services like Online Promotion, 
      Unique SEO, and Public relations, Project Launching, Broadcasting and Event Covering with High-tech multiple
      camera setups and a team full 
      of a highly skilled dedicated team of creative heads</p><br /><br />
    <h1 className="media">1.Shreehans Arts Media Consultancy Services</h1><br /><br />
    <p className="mediapara">We offer a variety of media consultancy services. Our team, filled with dedication, will do wonders to your curated project,
      from releasing mind-blowing public releases to working on social media platforms to promote your project.
      Some of the services we provide when it comes to Media Consultancy are:
    </p><br /><br />
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div>
          <h3>Broadcast And Event Covering With <br />Multiple Camera Setups :</h3>
          <p style={{fontSize: 20}}>Coverage are some of the services that Shreehans excel in.<br /> Our team is equipped withthe latest technology and the best quality<br />
            multiple-camera setup.Your video coverage must adhere to the <br />same highstandards as the rest of your projects.
            Shreehans provides<br /> high-quality services that are tailored to your requirements.</p>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <h3> Online Promotion &amp; SEO :</h3>
        <p style={{fontSize: 20}}>In the age of digitalization, it is highly recommended to 
          go for online promotion when it comes to releasing your project of a cover song, short film or documentary. SEO plays a vital role in all sorts of promotions. We have a team of SEO experts who have years of experience in the field,
          and they will take your project to the heights you had expectations of.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <h3> Dedicated &amp; Experienced Team :</h3>
        <p style={{fontSize: 20}}>A team full of dedicated and experienced professionals is the foundation for all the promotions. Be it keeping up with upcoming trends or marketing your 
          project to create hype in the audience, and our devoted team is enough for everything.</p>
      </div>
      <div className="col-lg-6 col-md-6">
        <h3> Song Launching &amp; PR : </h3>
        <p style={{fontSize: 20}}>Post-production services are vital for all types of projects. We have an impeccable hand when it comes to song launching and the PR of projects. 
          Shreehans deliver PR of incredible quality and makes sure your project reaches the ninth cloud in popularity.</p>
      </div>
    </div>
  </section>
</div>

 </>
}

export default MediaConsulting