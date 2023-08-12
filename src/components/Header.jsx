import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingBag} from "react-icons/fa"
import { useSelector } from 'react-redux'
// import { AiFillDelete } from 'react-icons/ai'
const Header = () => {
  const {cartItem} = useSelector(state=>state.cart)
  return (
   <nav>
    <h2>Logo here</h2>
    <div>
        <Link to={'/'} >Home</Link>
        
        <Link to={'/cart'} ><FaShoppingBag/><p>{cartItem.length}</p></Link>
        
    </div>
   </nav>
  )
}

export default Header
