import "./Categories.scss"
import { Link } from "react-router-dom"
function Categories() {
    return (
        <div className='Categories'>
            <div className="col">
                <div className="row">
                    <img src="/products/product2.jpg" alt="" />
                    <button><Link className="link" to="#">Women</Link></button>
                </div>
                <div className="row">
                    <img src="/products/product1.jpg" alt="" />
                    <button><Link className="link" to="#">Sale</Link></button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="/products/product3.jpg" alt="" />
                    <button><Link className="link" to="#">MEN</Link></button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="/products/product4.jpg" alt="" />
                            <button><Link className="link" to="#">Accessories</Link></button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="/products/product5.jpg" alt="" />
                            <button><Link className="link" to="#">Shoes</Link></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <img src="/products/category.jpg" alt="" />
                        <button><Link className="link" to="#">New Season</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
