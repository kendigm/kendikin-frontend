import './Card.scss'
import { Link } from "react-router-dom"
const Card = ({ item }) => {

    return (
        <Link className="link" to={`/product/${item.id}`} >
            {item &&
                (
                    <div className="card">
                        <div className="image">
                            {/* {item?.isNew && <span>New Season</span>} */}
                            <img src={item?.img?.secure_url} alt="" className="mainImg" />
                            <img src={item?.img?.secure_url} alt="" className="secondImg" />
                        </div>
                        <h2>{item?.title}</h2>
                        <div className="prices">
                            <h2>${item?.price}</h2>
                            {/* <h3>${item?.price}</h3> */}
                        </div>
                    </div>
                )}
        </Link>
    )
}

export default Card
