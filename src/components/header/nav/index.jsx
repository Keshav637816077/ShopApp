import React from 'react'
import Wrapper from './style'
import { Link } from 'react-router-dom'

const Nav = ({message}) => {
  return (
    <Wrapper>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/addProduct">Add Product</Link></li>
        </ul>
    </Wrapper>
  )
}

export default Nav