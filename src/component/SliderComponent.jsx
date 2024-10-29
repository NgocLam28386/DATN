// SliderComponent.jsx
import React from "react";
import Slider from "react-slick";
import img1 from "../assets/img/slider/home1-slide1.jpg";
import img2 from "../assets/img/slider/home1-slide2.jpg";
import img3 from "../assets/img/slider/home1-slide3.jpg";
import img4 from "../assets/img/slider/home2-slide1.jpg";
import img5 from "../assets/img/slider/home2-slide2.jpg";

const SliderComponent = () => {
    const settings = {
        infinite: true, // Cho phép slider chạy lặp
        speed: 500, // Tốc độ chuyển slide (ms)
        slidesToShow: 1, // Số lượng slide hiển thị
        slidesToScroll: 1, // Số lượng slide cuộn mỗi lần
        autoplay: true, // Tự động chạy
        autoplaySpeed: 2000, // Tốc độ tự động chuyển (ms)
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={img1} alt="Slide 1" />
            </div>
            <div>
                <img src={img2} alt="Slide 1" />
            </div>
            <div>
                <img src={img3} alt="Slide 1" />
            </div>
            <div>
                <img src={img4} alt="Slide 1" />
            </div>
            <div>
                <img src={img5} alt="Slide 1" />
            </div>
        </Slider>
    );
};

export default SliderComponent;
