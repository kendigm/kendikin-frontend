import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi voluptate architecto. Necessitatibus aut, praesentium optio magni nihil eum odit! Aliquid quaerat </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi voluptate architecto. Necessitatibus aut, praesentium optio magni nihil eum odit! Aliquid quaerat </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Kendikin Closet</span>
          <div className="copyright">
            @ Copyright 2024. All Rights Reserved
          </div>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer
