import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Frontend_Assets/logo.png'
import cart from '../../assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

function Navbar() {

    const [menu, setMenu] = useState('shop');
    const { getTotalCartItems } = useContext(ShopContext)


    return (
        <div className='navbar'>

            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPHERE</p>
            </div>
            <ul>
                <li onClick={() => setMenu("shop")} >  <Link to='/' >  Shop  </Link> {menu === "shop" ? <hr /> : ""}  </li>
                <li onClick={() => setMenu("men")} >  <Link to='/mens' >  Men   </Link> {menu === "men" ? <hr /> : ""}  </li>
                <li onClick={() => setMenu("women")} >  <Link to='/womens' >  Women  </Link>  {menu === "women" ? <hr /> : ""}  </li>
                <li onClick={() => setMenu("kids")} >  <Link to='/kids' >  Kids  </Link>  {menu === "kids" ? <hr /> : ""}  </li>
            </ul>

            <div className="nav-login">
                {
                    localStorage.getItem('auth-token') ?
                        <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }} >Logout</button>
                        : <Link to='/login' > <button>Login</button></Link>}

                <Link to='/cart' >  <img src={cart} alt="" /></Link>
                <div className="count">{getTotalCartItems()}</div>
            </div>

        </div>
    )
}

export default Navbar