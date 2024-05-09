import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CategoryDetail from './components/CategoryDetail'
import Error from './components/Error'
import VideoDescription from './components/VideoDescription'
import Header from './components/Header'
// import VideoDescription from './components/VideoDescription'
const App = () => {
 return <>
 <Header/>
 <BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
  <Route path='/category/:categoryName' element={<CategoryDetail/>}/>
  <Route path='/category/' element={<Error/>}/>
<Route path='/video/:category/:songName' element={<VideoDescription/>}/>

</Routes>


 </BrowserRouter>
 </>
}

export default App