import React from 'react';
import logo from '../images/bird_2.jpg';
// import '../footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
const Footer = () => {
    const navigate = useNavigate();

    const handleNavigate = (url) => {
        navigate(url);
    };

    return (
        <div>
            <Wrapper>
            <div className="footer-section">
                <div className="welcome">
                    <img src={logo} width={100} alt="logo" />
                    <p>
                        Welcome to the Shreehans Arts and Creations Pvt. Ltd. I am extremely proud the way our production house
                        has
                        risen- with
                        flexibility and resilience.
                    </p>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <FaFacebook style={{ marginRight: '20px' }} />
                        <FaInstagram style={{ marginRight: '20px' }} />
                        <FaLinkedin style={{ marginRight: '20px' }} />
                        <FaTwitter />
                    </div>
                </div>
                <div className="mobile">
                    <div className="explore">
                        <h3>Explore</h3>
                        <ul>
                            <li onClick={() => handleNavigate('/home')}>Home</li>
                            <li onClick={() => handleNavigate('/terms')}>Terms & Conditions</li>
                            <li onClick={() => handleNavigate('/about')}>About Us</li>
                            <li onClick={() => handleNavigate('/gallery')}>Gallery</li>
                            <li onClick={() => handleNavigate('/privacy')}>Privacy Policy</li>
                            <li onClick={() => handleNavigate('/contact')}>Contact Us</li>
                            <li onClick={() => handleNavigate('/blogs')}>Blogs</li>
                        </ul>
                    </div>
                    <div className="services">
                        <h3>Services</h3>
                        <ul>
                            <li onClick={() => handleNavigate('/home')}>Video Editing</li>
                            <li onClick={() => handleNavigate('/home')}>Media Consulting</li>
                            <li onClick={() => handleNavigate('/home')}>Equipment Availability</li>
                            <li onClick={() => handleNavigate('/home')}>Film Making</li>
                            <li onClick={() => handleNavigate('/home')}>Studio Booking</li>
                            <li onClick={() => handleNavigate('/services/video-production-company')}>Video Production</li>
                        </ul>
                    </div>
                </div>
                <div className="subscribe">
                    <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <div className="subscribe-section">
                        <input type="text" placeholder="Enter your Email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="developer">
                <p>Developed by Untechy</p>
            </div>
        </Wrapper>
        </div>
    );
}

export default Footer;

const Wrapper=styled.section`
*{
    color:white;
}

.footer-header p {
    background-color: rgba(255, 255, 255, 0.708);
    color: rgb(234, 151, 10);
    text-align: center;
    padding: 1rem;
    font-size: 18px;

}

.footer-section {
    display: flex;
    padding: 5rem;
    background-color: rgb(34, 31, 31);

}

.welcome {
    width: 100%;
}

.welcome p {
    line-height: 25px;
}

li::marker {
    color: rgb(234, 151, 10);
}

h3 {
    margin-bottom: 1rem;
}

ul li {
    line-height: 20px;
    margin-bottom: 10px;
    list-style-type: square;
    margin-left: -20px;
}

.welcome {
    margin-right: 5rem;
}

.mobile {
    display: flex;
    width: 100%;
    margin-left: 3rem;
}

.explore {
    width: 100%;



}

.services {
    width: 100%;
}

.subscribe {
    width: 100%;



}
.welcome img{
    margin-bottom: 6px;
}

.subscribe-section {
    display: flex;
}

.subscribe-section input {
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
}

.subscribe-section button {
    background-color: rgb(234, 151, 10);
    padding: 1rem;
}

.developer {
    background-color: rgb(234, 151, 10);
}

.developer p {
    text-align: center;
    padding: 1rem;
    font-size: 18px;
}

@media screen and (max-width: 767px) {
    .welcome img {
        margin-left: 3rem;

    }

    .footer-section {
        display: flex;
        flex-direction: column;
        padding: 1rem;

    }

    .welcome {
        margin-right: 0rem;
    }

    ul li {
        font-size: 14px;
    }

    .mobile {
        margin-top: 1rem;
        display: flex;
        margin-bottom: 1rem;
        margin-left: 2rem;

    }

    .explore {


        margin-left: 0rem;
    }

    .services {

        margin-left: 0rem;
    }

    .subscribe h3 {
        margin-left: 1rem;
    }

    .subscribe-section {
        margin-left: 1rem;
    }
}
`;
