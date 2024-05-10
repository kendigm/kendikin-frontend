import React from "react";

import PropTypes from "prop-types";

const productList = [
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_1.jpg",
        title: "Luxury Tassel Small Messenger Bag For Lingge",
        price: "225.00",
        rating: "4.1",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_2.jpg",
        title: "R WHITES LEMONADE 24X330ML CANS",
        price: "12.00",
        rating: "4.9",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_3.jpg",
        title: "Spring Autumn Kids Thin Sweater Boys Girls Clothes Cute Dinosaur",
        price: "835.00",
        rating: "4.6",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_4.jpg",
        title: "LAOCHRA White Shoes For Men Sneakers Leather Korean Style",
        price: "942.00",
        rating: "4.2",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_5.jpg",
        title: "Hammered Copper Martini Glasses Refill 84pcs",
        price: "1721.00",
        rating: "4.0",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_6.jpg",
        title: "Gel Pen Refill Gel Pen Glitter Pens Gel Roller",
        price: "234.00",
        rating: "3.7",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_7.jpg",
        title: "Science in Sport Clear Drinks Bottle, 800",
        price: "56.00",
        rating: "4.9",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_8.jpg",
        title: "Spring Autumn Kids Thin Sweater Boys Girls Clothes Cute",
        price: "6534.00",
        rating: "4.5",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_9.jpg",
        title: "Spring Autumn Kids Thin Sweater Boys Girls Clothes Waterproof",
        price: "1725.00",
        rating: "4.8",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_10.jpg",
        title: "Brightening Fine Lines and Wrinkles Face Cleanser",
        price: "2342.00",
        rating: "4.6",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_11.jpg",
        title: "Revlon Ultra HD Lipstick ( Pack Of 2 ) Shades 860",
        price: "172.00",
        rating: "4.1",
    },
    {
        img: "https://cdn.easyfrontend.com/pictures/ecommerce/ep-grid_7_12.jpg",
        title: "Men's Perfumes Sauvage Eau De Parfum Perfumes",
        price: "435.00",
        rating: "4.8",
    },
];

const ProductItem = ({ product }) => {
    return (
        <div className=" p-2">
            <div className="relative">
                <a href="#!">
                    <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 text-white hover:text-blue-600 flex justify-center items-center rounded-full p-4">
                        {/* <FontAwesomeIcon icon={faHeart} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                    </div>
                </a>
                <a href="#!">
                    <img src={product.img} alt="..." className="w-full" />
                </a>
                <h5 className="font-medium text-lg bg-slate-100 dark:bg-slate-800 text-white px-4 py-1 rounded-full absolute -bottom-3 right-3">
                    {/* <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-500" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>

                    {product.rating}
                </h5>
            </div>
            <div className="py-4 lg:py-6 text-start px-1">
                <a href="#!">
                    <h5 className="text-[17px] font-medium">{product.title}</h5>
                </a>
                <div className="flex justify-between items-center px-1">
                    <h5 className="text-blue-600 font-medium text-[17px] leading-none my-2">
                        ${product.price}
                    </h5>
                    <a href="#!">
                        <h5 className="hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                        </h5>
                    </a>
                </div>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

const Products = () => {
    return (
        <section className="ezy__epgrid7 light py-14 md:py-24 bg-white  text-zinc-900  relative overflow-hidden z-10">
            <div className="container px-4 mx-auto">
                <h2 className="text-2xl font-bold leading-none md:text-[40px] text-center">
                    Latest Products
                </h2>
                <div className="grid grid-cols-12 text-center justify-start xl:justify-center mt-12">
                    {productList.map((product, i) => (
                        <div
                            className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 p-2"
                            key={i}
                        >
                            <ProductItem product={product} />{" "}
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12">
                <button className="text-white font-bold py-3 px-11 bg-black hover:bg-opacity-90 rounded">
                    See All
                </button>
            </div>
        </section>
    );
};
export default Products