import Card from '../Card/Card'
import './FeatureProducts.scss'


const FeatureProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            // img: product1,
            img: "/products/product1.jpg",
            img1: "./products/product2.jpg",
            title: "Long Sleeve T Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12

        }, {
            id: 2,
            img: "/products/product4.jpg",
            img1: "/products/product3.jpg",
            title: "Long Sleeve T Shirt",
            isNew: false,
            oldPrice: 19,
            price: 12

        },
        {
            id: 3,
            img: "/products/product5.jpg",
            img1: "/products/product6.jpg",
            title: "Long Sleeve T Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12

        },
        {
            id: 4,
            img: "/products/product7.jpg",
            img1: "/products/product8.jpg",
            title: "Long Sleeve T Shirt",
            isNew: false,
            oldPrice: 59,
            price: 42

        }
    ]
    return (
        <div className='FeatureProducts'>
            <div className="top">
                <h1 className='text-center'>{type} products</h1>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem, non, amet velit eveniet quam rerum aperiam ea officiis labore soluta error odit debitis cumque id sequi porro, harum accusamus?</p> */}
            </div>
            <div className="bottom">
                {data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeatureProducts
