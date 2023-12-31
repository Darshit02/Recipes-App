import React from 'react'
import Home from './Home'
import {Route,Routes} from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipes from './Recipes'

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
        <Route path='/searched/:search' element ={<Searched/>}/>
        <Route path='/recipes/:id' element ={<Recipes/>}/>
    </Routes>
    
  )
}

export default Pages