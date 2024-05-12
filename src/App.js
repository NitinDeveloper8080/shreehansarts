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
// import VideoDescription from './components/VideoDescription'
const App = () => {
 return <>

 <BrowserRouter>
<Routes>
<Route path='/' element={<Main/>}/>
<Route path='/expo' element={<About/>}/>
  <Route path='/category/:categoryName' element={<CategoryDetail/>}/>
  <Route path='/category/' element={<Error/>}/>
<Route path='/video/:category/:songName' element={<VideoDescription2/>}/>

</Routes>


 </BrowserRouter>

 </>
}

export default App