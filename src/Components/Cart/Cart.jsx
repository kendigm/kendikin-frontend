// import { useDispatch, useSelector } from 'react-redux'
// import './Cart.scss'
// import { removeItem, resetCart } from '../../redux/cartSlice';

// const Cart = () => {
//   const data = [
//     {
//       id: 1,
//       // img: product1,
//       img: "/products/product1.jpg",
//       img1: "./products/product2.jpg",
//       title: "Long Sleeve T Shirt",
//       isNew: true,
//       oldPrice: 19,
//       price: 12,
//       desc: "lorem ipsum fda q wfs wefd s"


//     }, {
//       id: 2,
//       img: "/products/product2.jpg",
//       img1: "/products/product1.jpg",
//       title: "Long Sleeve T Shirt",
//       isNew: false,
//       oldPrice: 19,
//       price: 12,
//       desc: "lorem ipsum fda q wfs wefd s"

//     },

//   ]
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.cart.products)
//   const totalPrice = () => {
//     let total = 0;
//     products.forEach(item => {
//       total += item.quantity * item.price
//     });
//     return total.toFixed(2)
//   }
//   return (
//     <div className='Cart'>
//       <h1>CART</h1>
//       {products?.map((item) => (
//         <div key={item.id} className="item">
//           <img src={item?.img} alt="" />
//           <div className="details">
//             <h1>{item?.title}</h1>
//             <p>{item?.desc?.substring(0, 100)}</p>
//             <div className="price">
//               {item.quantity} X ${item.price}
//             </div>

//           </div>
//           <div className="delete" onClick={() => dispatch(removeItem(item.id))}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svgicons w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//             </svg>

//           </div>
//         </div>
//       ))}
//       <div className="total">
//         <span>Sub Total</span>
//         <span>${totalPrice()}</span>
//       </div>
//       <button>BUY NOW</button>
//       <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>

//     </div>
//   )
// }

// export default Cart


import { useDispatch, useSelector } from 'react-redux'
import './Cart.scss'
import { removeItem, resetCart } from '../../redux/cartSlice';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
  // const data = [
  //   {
  //     id: 1,
  //     // img: product1,
  //     img: "/products/product1.jpg",
  //     img1: "./products/product2.jpg",
  //     title: "Long Sleeve T Shirt",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //     desc: "lorem ipsum fda q wfs wefd s"


  //   }, {
  //     id: 2,
  //     img: "/products/product2.jpg",
  //     img1: "/products/product1.jpg",
  //     title: "Long Sleeve T Shirt",
  //     isNew: false,
  //     oldPrice: 19,
  //     price: 12,
  //     desc: "lorem ipsum fda q wfs wefd s"

  //   },

  // ]
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products)
  const totalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.quantity * item.price
    });
    return total.toFixed(2)
  }
  const { loginWithRedirect, user } = useAuth0();

  const handleCheckout = () => {
    if (!user) {
      loginWithRedirect()
    }
    axios.post(`http://localhost:5000/api/create-checkout-session`, {
      cartItems,
    })
      .then((response) => {
        if (response.data) {
          window.location.href = response.data.url;
          dispatch(resetCart())
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className='Cart'>
      <h1>CART</h1>
      {
        cartItems &&
        cartItems?.map((item) => (
          <div key={item?.id} className="item">
            <img src={item?.img.secure_url} alt="" />
            <div className="details">
              <h1>{item?.title}</h1>
              {/* <p>{item?.desc?.substring(0, 100)}</p> */}
              <div className="price">
                {item.quantity} X ${item.price}
              </div>

            </div>
            <div className="delete" onClick={() => dispatch(removeItem(item.id))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svgicons w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>

            </div>
          </div>
        ))}
      <div className="total">
        <span>Sub Total</span>
        <span>${totalPrice()}</span>
      </div>
      <button
        onClick={handleCheckout}
      >BUY NOW</button>
      <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>

    </div>
  )
}

export default Cart
