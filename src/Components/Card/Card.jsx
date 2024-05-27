import './Card.scss'
import { Link } from "react-router-dom"
const Card = ({ item }) => {

    return (
        <Link className="link " to={`/product/${item.id}`} >
            {item &&
                (
                    <div className="card">
                        <div className="image">
                            {/* {item?.isNew && <span>New Season</span>} */}
                            <img src={item?.img?.secure_url} alt="" className="mainImg" />
                            <img src={item?.img?.secure_url} alt="" className="secondImg" />
                        </div>
                        <h3 className='font-bold text-xl capitalize'>{item?.title}</h3>
                        <div className="prices">
                            <span className='text-red-600 font-bold text-lg'>${item?.price}</span>
                            <h3 className='capitalize'>{item?.category}</h3>
                        </div>
                    </div>
                )}
        </Link>
    )
}

export default Card
