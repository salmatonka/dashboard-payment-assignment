import React from 'react'

const Carousel = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                <img src="https://polite-trifle-4e5467.netlify.app/static/media/shutterstock_483957421.522601a8b9665e6d8460.webp" 
                    className="w-full " />
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <img  src="https://polite-trifle-4e5467.netlify.app/static/media/pexels-ankur-kumar-3872626.116f3a8a05e56e751ba0.jpg"
                     className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://polite-trifle-4e5467.netlify.app/static/media/pexels-asad-photo-maldives-169203.57064148d25d2bb825e3.jpg" 
                    className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://cdn0.weddingwire.in/vendor/6193/3_2/960/jpg/wedding-venue-olivia-wedding-hall-stage-decor-5_15_356193-160744291746795.jpeg"
                     className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
