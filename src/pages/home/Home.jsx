// import Contact from "../../Components/Contact/Contact"
// import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts"
import Slider from "../../Components/Slider/Slider"
import Categories from "../../Components/categories/Categories"
import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts"
import Contact from "../../Components/Contact/Contact"
import Products from "../../Components/products/Products"
// import Categories from "../../Components/categories/Categories"
import "./Home.scss"
const Home = () => {
  return (
    <div className="home " >
      <Slider />
      <FeatureProducts type="Featured" />
      <Products />
      <Categories />
      <FeatureProducts type="Trending" />
      <Contact />
      {/*
      <Categories />
      <Contact /> */}
    </div>
  )
}

export default Home
