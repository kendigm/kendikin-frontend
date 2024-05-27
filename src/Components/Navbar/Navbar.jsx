import './Navbar.scss'
import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import Wishlist from '../Wishlist/Wishlist';
;
const Navbar = () => {
  const { loginWithRedirect, user, logout } = useAuth0();
  const [open, setOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const products = useSelector((state) => state.cart.products)
  const wishlistItems = useSelector((state) => state?.wishlist?.wishlistProducts);


  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="left">
          {/* <div className="item">
            <img src="/img/en.png" alt="" />

            <IoIosArrowDown />
          </div> */}
          {/* <div className="item">
            USD
            <IoIosArrowDown />
          </div> */}
          <div className="item">
            <Link className='link' to="/products">Women</Link>
          </div>          <div className="item">
            <Link className='link' to="/products">Men</Link>
          </div>          <div className="item">
            <Link className='link' to="/products">Kids</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/">
            <img src="/white.png" alt="" width={50} height={50} className='' />
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className='link' to="/products">New</Link>
          </div><div className="item">
            <Link className='link' to="/products">Apparel</Link>
          </div><div className="item">
            <Link className='link' to="/products">Bag</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products">Shoes</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products">Beauty</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products">Accessories</Link>
          </div>
          {user
            &&
            < div className="item">
              <Link onClick={logout} className='link' to="/">Logout</Link>
            </div>
          }
          {user ?
            user.picture ?
              <img src={user.picture} className='rounded-full w-12 h-12' alt="" /> : <span>{user.name}</span> :
            <button onClick={() => loginWithRedirect()}>Log In</button>
          }
          <div className="icons">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svgicons">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svgicons">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg> */}
            <div className="carticon"
              onClick={() => {
                setOpen(false)
                setWishlistOpen(!wishlistOpen)
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svgicons">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <span>{wishlistItems?.length}</span>

            </div>

            <div className="carticon"
              onClick={() => {
                setOpen(!open)
                setWishlistOpen(false)

              }}

            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svgicons">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span>{products?.length}</span>
            </div>

          </div>
        </div>
      </div>
      {open && <Cart />}
      {wishlistOpen && <Wishlist />}
    </div >
  )
}

export default Navbar
