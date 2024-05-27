import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductQuery } from "../../redux/usersApiSlices";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { addToWishlist } from "../../redux/wishlistSlice";


const productDetails = {
    title: "Wireless In-Ear Earphones Y30",
    previews: [
        {
            previewUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2.png",
            thumbUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-1.png",
        },
        {
            previewUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
            thumbUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
        },
        {
            previewUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
            thumbUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
        },
    ],
    rating: 5.0,
    rateCount: 1256,
    price: 5840,
    colorVariants: [
        { bgcolor: "bg-yellow-500", value: "Multi" },
        { bgcolor: "bg-blue-500", value: "Blue" },
        { bgcolor: "bg-red-400", value: "Pink" },
        { bgcolor: "bg-black", value: "Black" },
        { bgcolor: "bg-red-600", value: "Red" },
    ],
    sizeVariants: [
        { label: "XXS", value: "XXS", title: "Extra Extra Small" },
        { label: "XS", value: "XS", title: "Extra Small" },
        { label: "S", value: "S", title: "Small" },
        { label: "M", value: "M", title: "Medium" },
        { label: "L", value: "L", title: "Large" },
        { label: "XL", value: "XL", title: "Extra Large" },
        { label: "XXL", value: "XXL", title: "Extra Extra Large" },
        {
            label: "XXXL",
            value: "XXXL",
            title: "Extra extra extra large",
            disabled: true,
        },
    ],
};

const ProductPreviews = ({ data }) => {
    const [index, setIndex] = useState(0);
    // const { id } = useParams()
    // const { data } = useProductQuery(id)
    // console.log(data)

    return (
        <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-4 sm:p-6 lg:p-12 lg:mr-6">
            {data &&
                <div className="text-center py-6 cursor-pointer">
                    <img
                        src={data?.img?.secure_url}
                        alt=""
                        className="max-w-full h-auto rounded-lg mx-auto"
                    />
                </div>
            }

            <ul className="flex gap-3 mt-6">
                <li
                    className="w-24 h-24 flex justify-center items-center p-2 rounded-md border border-gray-200 dark:border-slate-700 cursor-pointer"
                    onClick={() => setIndex(data.id)}
                >
                    <img
                        src={data?.img?.secure_url}
                        alt="" className="max-w-full h-auto" />
                </li>
            </ul>
        </div>
    );
};

// ProductPreviews.propTypes = {
//     previews: PropTypes.array.isRequired,
// };

const ColorVariant = () => {
    const [selectedColor, setSelectedColor] = useState("Multi");

    const handleColorChange = (value) => {
        setSelectedColor(value);
    };

    return (
        <>
            <div className="mb-6">
                <h5 className="font-medium mb-2">
                    Color:{" "}
                    <span className="opacity-50">
                        {selectedColor &&
                            productDetails.colorVariants.find(
                                (color) => color.value === selectedColor
                            )?.value}
                    </span>
                </h5>
                <div className="flex flex-wrap gap-2 mb-2">
                    {productDetails.colorVariants.map((item, i) => (
                        <Fragment key={i}>
                            <input
                                type="radio"
                                className="absolute hidden"
                                autoComplete="off"
                                checked={selectedColor === item.value}
                                onChange={() => handleColorChange(item.value)}
                            />
                            <label
                                className={`w-8 h-8 rounded-full ${item.bgcolor
                                    } border-2 border-white dark:border-[#0b1727] cursor-pointer mt-1 hover:outline hover:outline-1 hover:outline-${item.color
                                    } ${selectedColor === item.value &&
                                    `outline outline-1 outline-${item.color}`
                                    }`}
                                onClick={() => handleColorChange(item.value)}
                            ></label>
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

const SizeVariant = () => {
    const [selectedSize, setSelectedSize] = useState("XXS");

    const handleSizeChange = (value) => {
        if (productDetails.sizeVariants.find((size) => size.value === value)?.disabled) {
            return;
        }
        setSelectedSize(value);
    };

    const { id } = useParams()
    const { data } = useProductQuery(id)
    console.log(data)
    return (
        <>
            <div className="mb-6">
                <h5 className="font-medium mb-2">
                    Size:{" "}
                    <span className="opacity-50">
                        {data?.size}
                        {/* {selectedSize &&
                            productDetails.sizeVariants.find((size) => size.value === selectedSize)
                                ?.title} */}
                    </span>
                </h5>
                <div className="flex flex-wrap gap-2 mb-2">
                    {productDetails.sizeVariants.map((size) => (
                        <React.Fragment key={size.label}>
                            <input
                                type="radio"
                                className="absolute hidden"
                                autoComplete="off"
                                checked={selectedSize === size.label}
                                onChange={() => handleSizeChange(size.label)}
                            />
                            <label
                                className={`bg-gray-700 
                                cursor-pointer
                                py-1 px-4 rounded-full border mt-1 ${selectedSize === size.label
                                        ? "border-blue-600 border-4 text-black bg-yellow-50 "
                                        : "border-blue-50 text-white  bg-gray-100"
                                    }  ${size.disabled
                                        ? "line-through opacity-40 cursor-not-allowed"
                                        : "cursor-pointer"
                                    }`}
                                onClick={() => handleSizeChange(size.value)}
                            >
                                {size.label}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

const QtyField = ({ name, value, onChange }) => {
    const qtyControl = (qty) =>
        onChange({
            target: {
                name,
                type: "radio",
                value: qty < 1 ? 1 : qty,
            },
        });

    return (
        <div className="flex h-11 w-24 mb-4">
            <input
                type="number"
                className="w-2/3 pl-2 text-center border border-black dark:border-white bg-transparent focus:outline-none rounded-lg overflow-hidden font-bold text-lg"
                placeholder=""
                value={value}
                onChange={(e) => qtyControl(e.target.value)}
            />
            <div className="w-1/3 rounded-lg overflow-hidden flex flex-col border border-black dark:border-white bg-transparent p-0">
                <button
                    className="text-blue-600 hover:bg-black hover:text-white h-1/2 font-bold leading-none text-lg"
                    type="button"
                    onClick={() => qtyControl(parseInt(value) - 1)}
                >
                    -
                </button>
                <button
                    className="text-blue-600 hover:bg-black hover:text-white h-1/2 font-bold leading-none text-lg"
                    type="button"
                    onClick={() => qtyControl(parseInt(value) + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
};

// QtyField.propTypes = {
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     value: PropTypes.any,
// };

const Product = () => {
    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState({
        color: "Multi",
        size: "XL",
        qty: 1,
    });

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const setField = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    const { id } = useParams()
    const { data } = useProductQuery(id)
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(data));
    };
    const handleAddtowishlist = () => {
        dispatch(addToWishlist(data));
    };
    const wishlistItems = useSelector((state) => state?.wishlist?.wishlistProducts);
    const isProductInWishlist = wishlistItems && data && wishlistItems?.some((item) => item?.id === data?.id);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: data?.title,
                text: 'Check out this product!',
                url: window.location.href,
            })
                .then(() => console.log('Product shared successfully'))
                .catch((error) => console.error('Error sharing product:', error));
        } else {
            // Fallback for browsers that do not support the Web Share API
            alert('Web Share API is not supported in your browser.');
        }
    };
    return (
        <Fragment>
            {/* <section className="py-11 bg-white dark:bg-[#0b1727] text-white relative overflow-hidden z-10">
                <div className="container">
                    <button
                        className="bg-black text-white hover:bg-opacity-90 py-2 px-4 rounded"
                        onClick={handleShow}
                    >
                        Product Quick Overview 9
                    </button>
                </div>
            </section> */}
            <div className={show ? "" : "hidden"}>
                <div className="bg-white  text-zinc-900  overflow-hidden relative max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-6xl rounded mx-auto my-14">
                    <button
                        className="absolute right-0 top-0 mt-4 mr-4"
                    // onClick={handleClose}
                    >
                        {/* <FontAwesomeIcon icon={faTimes} className="text-xl" /> */}
                        {/* times */}
                    </button>

                    <div className="flex flex-col lg:flex-row justify-center gap-6">
                        <div className="w-full lg:w-1/2">
                            <ProductPreviews data={data} />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="px-6 py-12">
                                <div className="mb-6 lg:mb-12">
                                    <h1 className="text-4xl leading-none font-medium mb-4">
                                        {data?.title}
                                    </h1>
                                    <p className="opacity-70 mb-6">
                                        <span>4.0</span>{" "}

                                        {/* <FontAwesomeIcon
                                            icon={faStar}
                                            className="mx-2 text-yellow-500"
                                        /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>

                                        <span
                                            className="text-blue-600 hover:underline font-medium ml-1"
                                        >
                                            8 Reviews
                                        </span>{" "}
                                        <span className="ml-2">104 Order</span>
                                    </p>
                                    <h3 className="text-blue-600 text-2xl font-bold">
                                        ${data?.price}
                                    </h3>
                                </div>

                                <div>
                                    <div className="mb-6">
                                        <ColorVariant />
                                    </div>
                                    <div className="mb-6">
                                        <SizeVariant />
                                    </div>
                                    <div className="mb-6">
                                        <h5 className="font-medium mb-2">QTY</h5>
                                        <QtyField
                                            onChange={setField}
                                            name="qty"
                                            value={formData.qty}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 w-full my-7">
                                        <div className="flex items-center gap-4 w-full max-w-lg">
                                            <button
                                                onClick={handleAddToCart}
                                                className="bg-black border border-blue-600 text-white text-sm rounded uppercase hover:bg-opacity-90 px-10 py-2.5 h-10 md:px-12 w-1/2">
                                                Add To Cart
                                            </button>

                                        </div>
                                        <div className="flex items-center gap-4 w-full">
                                            <button
                                                onClick={handleAddtowishlist}

                                                className="hover:bg-red-400 rounded hover:bg-opacity-10 text-red-600 px-3 py-2">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    // fill="none"
                                                    fill={isProductInWishlist ? "currentColor" : "none"}

                                                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>


                                                Add To Wishlist
                                            </button>
                                            <button
                                                onClick={handleShare}
                                                className="hover:bg-black rounded hover:bg-opacity-10 text-blue-600 px-3 py-2">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>

                                                Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};



export default Product