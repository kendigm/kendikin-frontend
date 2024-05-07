import { useState } from 'react'
import './Slider.scss'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    function PrevSlide() {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }
    function NextSlide() {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }
    return (
        <div className='slider'>
            <div className="containerr" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src="/women/image16.png" alt="slider2" />
                <img src="/women/image3.png" alt="slider2" />
                <img src="/women/oct.png" alt="slider2" />
            </div>
            <div className="icons">
                <div className="icon" onClick={PrevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svgicons">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>

                </div>
                <div className="icon" onClick={NextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svgicons">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
            </div>
        </div >
    )
}

export default Slider
