import React from 'react'
import Home from './components/Home'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CategoryDetail from './components/CategoryDetail'
import Error from './components/Error'
import VideoDescription from './components/VideoDescription'
import Header from './components/Header'
import VideoPlayBack from './components/VideoPlayBack'
import VideoDescription2 from './components/VideoDescription2'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './components/experiment/About'
import ServiceOffer from './components/ServiceOffer'
import VideoProduction from './components/VideoProduction'
import AboutUs from './components/AboutUs'
import TermsAndCondition from './components/TermsAndCondition'
import VideoEditing from './components/VideoEditing'
import MediaConsulting from './components/MediaConsulting'
import { Navbar } from 'react-bootstrap'
import NavBar from './components/NavBar'
import Footer2 from './components/Footer2'
// import VideoDescription from './components/VideoDescription'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/images/shreehans_arts_logo.png'
import StudioBooking from './components/StudioBooking'
import FilmMaking from './components/FilmMaking'
import PrivacyPolicy from './components/PrivacyPolicy'
import NewNavbar from './components/NewNavbar'
const App = () => {
 return <>

 <BrowserRouter>
 {/* <NavBar/> */}
 <NewNavbar/>
<Routes>
<Route path='/' element={<Main/>}/>

<Route path='/expo' element={<About/>}/>
  <Route path='/category/:categoryName' element={<CategoryDetail/>}/>
  <Route path='/category/' element={<Error/>}/>
<Route path='/video/:category/:songName' element={<VideoDescription2/>}/>
<Route path='/serviceOffer' element={<ServiceOffer/>}/>
<Route path='/services/video-production-company' element={<VideoProduction/>}/>
<Route path='/about' element={<AboutUs/>}/>
<Route path='/terms-and-conditions' element={<TermsAndCondition/>}/>
<Route path='/services/video-editing' element={<VideoEditing/>}/>
<Route path='/services/media-consulting' element={<MediaConsulting/>}/>
<Route path='/services/studio-booking' element={<StudioBooking/>}/>
<Route path='/services/film-making' element={<FilmMaking/>}/>
<Route path='/privacy-policy' element={<PrivacyPolicy/>}/>


</Routes>

<Footer logo={logo}/>

 </BrowserRouter>
 </>
}

export default App