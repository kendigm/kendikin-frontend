// import Contact from "../../Components/Contact/Contact"
// import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts"
import Slider from "../../Components/Slider/Slider"
import Products from "../../Components/products/Products"
import Product from "../product/Product"
// import Categories from "../../Components/categories/Categories"
import "./Home.scss"
const Home = () => {
  return (
    <div className="home " >
      <Slider />
      <Products />
      <Product />
      {/*
      <FeatureProducts type="Featured" />
      <Categories />
      <FeatureProducts type="Trending" />
      <Contact /> */}
    </div>
  )
}

export default Home
