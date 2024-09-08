import React from 'react'
import Wrapper from './style'
import Nav from './nav'
import { Link } from 'react-router-dom'

const Header = ({message}) => {
  return (
    <Wrapper>
        <Link to="/"><h1>ShopApp {message}</h1></Link>
        <Nav />
    </Wrapper>
  )
}

export default Header

  