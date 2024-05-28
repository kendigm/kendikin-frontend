import { useState } from 'react';
import { useProductsQuery } from '../../redux/usersApiSlices'
import Card from '../Card/Card'
import './FeatureProducts.scss'


const FeatureProducts = ({ type }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const { data } = useProductsQuery()

    const filteredProducts = data?.filter((product) => {
        const matchesCategory = category === 'all' || product.category === category;
        const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    }) || [];
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const shuffledProducts = shuffleArray([...filteredProducts]);
    return (
        <div className='FeatureProducts'>
            <div className="top">
                <h1 className='text-center'>{type} products</h1>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem, non, amet velit eveniet quam rerum aperiam ea officiis labore soluta error odit debitis cumque id sequi porro, harum accusamus?</p> */}
            </div>
            <div className="filters flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="category-filter space-x-2 mb-4 md:mb-0">
                    <button
                        onClick={() => handleCategoryChange('all')}
                        className={`py-2 px-4 rounded ${category === 'all' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => handleCategoryChange('kids')}
                        className={`py-2 px-4 rounded ${category === 'kids' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    >
                        Kids
                    </button>
                    <button
                        onClick={() => handleCategoryChange('women')}
                        className={`py-2 px-4 rounded ${category === 'women' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    >
                        Women
                    </button>
                    <button
                        onClick={() => handleCategoryChange('man')}
                        className={`py-2 px-4 rounded ${category === 'man' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    >
                        Man
                    </button>
                </div>
                <div className="search-filter">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="py-2 px-4 border border-gray-300 rounded"
                    />
                </div>
            </div>
            <div className="bottom">
                {shuffledProducts &&
                    shuffledProducts.slice(0, 5)?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeatureProducts
