import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from "react";
import "./carousel.css"


const HomeCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ marginTop: "75px" }} wrap={false} controls={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://habib-shoplane.glitch.me/Carousel-image-1.png"
                    alt="First slide"

                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://habib-shoplane.glitch.me/Carousel-image-2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://habib-shoplane.glitch.me/Carousel-image-3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://habib-shoplane.glitch.me/Carousel-image-4.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;