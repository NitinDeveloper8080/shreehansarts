import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
<header>

<ul>
    <NavLink to='/expo/'>Home</NavLink>
    <NavLink to='/expo/contact'>Contact</NavLink>
    <NavLink to='/'>About</NavLink>


</ul>
</header>

    <div>About</div>
    </>
  )
}

export default About