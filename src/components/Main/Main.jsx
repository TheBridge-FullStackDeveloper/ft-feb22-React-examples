import React, { Component } from 'react'
import ProductList from './ProductList'
import Chefs from './Chefs'
import About from './About'
import Contact from './Contact'
import Delivery from './Delivery'
import Topics from './Topics'
import Tasters from './Tasters'

import { Route, Routes } from 'react-router-dom'
export class Main extends Component {
  render() {
    return (
      <main>
        <h1>Futura web - Exploding Cakes</h1>
        <p>Esto es el Main</p>
          <Routes>
            <Route element={<ProductList/>} path='/'/>
            <Route element={<Chefs/>} path='/listachefs'/>
            <Route element={<About/>} path='/about'/>
            <Route element={<Delivery/>} path='/delivery'/>
            <Route element={<Topics/>} path='/topics'/>
            <Route element={<Tasters/>} path='/tasters'/>
            <Route element={<Contact/>} path='/contact'/>
          </Routes>
      </main>
    )
  }
}

export default Main

