import React from 'react'
import styled from 'styled-components'
import  logo from '../assets/images/shreehans_arts_logo.png'
import { useNavigate } from 'react-router-dom';
const NewNavbar = () => {
  const navigate = useNavigate();

    const handleNavigate = (url) => {
        navigate(url);
    };


return <>
<Wrapper>
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        {/* <img id="mylogo"src="./log.png" width="254" height="75"/> */}
        <img  src={logo} width={254} height={75}  />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 ms-1  fs-5 p-3 ">
          <li className="nav-item" onClick={() => handleNavigate('/')}>
            <a className="nav-link " aria-current="page" >Home</a>
          </li>
          <li className="nav-item" onClick={() => handleNavigate('/about')}>
            <a className="nav-link" >About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={() => handleNavigate('/services/video-editing')}>Video Editing</a></li>
              <li><a className="dropdown-item" onClick={() => handleNavigate('/services/film-making')}>Film Making</a></li>
              <li><a className="dropdown-item" onClick={() => handleNavigate('/services/media-consulting')}>Media Consulting</a></li>
              <li><a className="dropdown-item" onClick={() => handleNavigate('/services/studio-booking')}>Studio Booking</a></li>
              <li><a className="dropdown-item" onClick={() => handleNavigate('/services/equipment-availability')}>Equipment Availability</a></li>
              <li><a className="dropdown-item" onClick={() => handleNavigate('/services/video-production-company')}>Video Production Company</a></li>
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
      </div>
      <a href="https://youtu.be/LBXfLJBz69w?si=evQcuLztXwiA0SqW"><button className="btn btn-danger p-2 fs-5" style={{marginRight: 30}}>Youtube</button></a>
    </div>
  </nav>
</Wrapper>

</>
}

export default NewNavbar

const Wrapper=styled.section`

ul.nav > a:hover{
    color:red !important;
    background-color: white;
}
.nav-link:hover{
    /* text-decoration: line-through; */
        color: #F0B242;
}
ul li {
    margin-right: 20px;
}
.dropdown-item:hover{
color: white;
background-color: #F0B242;
appearance: none;
}
.dropdown{
    padding: 0;
    margin: 0;
}
.dropdown-menu{
    padding: 0;
}
.dropdown-item{
    color: white;
    background-color: black;
    appearance: none;
    z-index:-3;
    }
    .YouTube{
        background-color: red;
        color: white;
        width: 100px;
        height: 40px;
        border-radius: 6px;
    }






`
