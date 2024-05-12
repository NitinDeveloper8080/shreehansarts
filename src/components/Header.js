import React from 'react'
// import '../assets/css/streamit.min3b92.css?v=5.1.0'
// import '../assets/css/core/libs.min.css'
// import '../assets/vendor/font-awesome/css/all.min.css'
// import '../assets/vendor/iconly/css/style.css'
// import '../assets/vendor/animate.min.css'
// import '../assets/vendor/swiperSlider/swiper.min.css'
// import '../assets/css/streamit.min3b92.css?v=5.1.0'
// import '../assets/css/custom.min3b92.css?v=5.1.0'
// import '../assets/css/rtl.min3b92.css?v=5.1.0'
import '../custom.css'
import logo from '../constants'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
 return <>


<nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img id="mylogo"src={logo} width="254" height="75"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto  fs-5 p-3">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href='#'>
                  
               Home
                  
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Video Editing</a></li>
                  <li><a className="dropdown-item" href="#">Film Making</a></li>
                  <li><a className="dropdown-item" href="#">Media Consulting</a></li>
                  <li><a className="dropdown-item" href="#">Studio Booking</a></li>
                  <li><a className="dropdown-item" href="#">Equipment Availability</a></li>
                  <li><a className="dropdown-item" href="#">Video Production Company</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Movies
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Jaggu Ki Lalten</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
            

                <form className="d-flex ms-auto " role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-warning text-light" type="submit">Search</button>
                </form>
            
          </div>
        </div>
      </nav>
 </>
}

export default Header