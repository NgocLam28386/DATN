import React from "react";
import SliderComponent from "../../component/SliderComponent";

function HomePage() {
    return (
        <>
            <main>
                {/* hero slider area start */}
                <SliderComponent/>
                {/* hero slider area end */}
                {/* twitter feed area start */}
                <div className="twitter-feed">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="twitter-feed-content text-center">
                                    <p>
                                        <a href="#">Padora</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* twitter feed area end */}
                {/* service policy area start */}
                <div className="service-policy section-padding">
                    <div className="container">
                        <div className="row mtn-30">
                            <div className="col-sm-6 col-lg-3">
                                <div className="policy-item">
                                    <div className="policy-icon">
                                        <i className="pe-7s-plane" />
                                    </div>
                                    <div className="policy-content">
                                        <h6>Miễn phí vận chuyển</h6>
                                        <p>Miễn phí vận chuyển mọi đơn hàng</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="policy-item">
                                    <div className="policy-icon">
                                        <i className="pe-7s-help2" />
                                    </div>
                                    <div className="policy-content">
                                        <h6>Hỗ trợ 24/7</h6>
                                        <p>Hỗ trợ 24/7</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="policy-item">
                                    <div className="policy-icon">
                                        <i className="pe-7s-back" />
                                    </div>
                                    <div className="policy-content">
                                        <h6>Hoàn tiền</h6>
                                        <p>30 ngày đổi trả miễn phí</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="policy-item">
                                    <div className="policy-icon">
                                        <i className="pe-7s-credit" />
                                    </div>
                                    <div className="policy-content">
                                        <h6>Thanh toán an toàn 100%</h6>
                                        <p>
                                            Chúng tôi đảm bảo thanh toán an toàn
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* service policy area end */}
                {/* banner statistics area start */}
                <div className="banner-statistics-area">
                    <div className="container">
                        <div className="row row-20 mtn-20">
                            <div className="col-sm-6">
                                <figure className="banner-statistics mt-20">
                                    <a href="#">
                                        <img
                                            src="assets/img/banner/img1-top.jpg"
                                            alt="product banner"
                                        />
                                    </a>
                                    <div className="banner-content text-right">
                                        <h5 className="banner-text1">
                                            BEAUTIFUL
                                        </h5>
                                        <h2 className="banner-text2">
                                            Nhẫn<span>cưới</span>
                                        </h2>
                                        <a
                                            href="shop.html"
                                            className="btn btn-text"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-sm-6">
                                <figure className="banner-statistics mt-20">
                                    <a href="#">
                                        <img
                                            src="assets/img/banner/img2-top.jpg"
                                            alt="product banner"
                                        />
                                    </a>
                                    <div className="banner-content text-center">
                                        <h5 className="banner-text1">
                                            EARRINGS
                                        </h5>
                                        <h2 className="banner-text2">
                                            Hoa<span>tai</span>
                                        </h2>
                                        <a
                                            href="shop.html"
                                            className="btn btn-text"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-sm-6">
                                <figure className="banner-statistics mt-20">
                                    <a href="#">
                                        <img
                                            src="assets/img/banner/img3-top.jpg"
                                            alt="product banner"
                                        />
                                    </a>
                                    <div className="banner-content text-center">
                                        <h5 className="banner-text1">
                                            NEW ARRIVALLS
                                        </h5>
                                        <h2 className="banner-text2">
                                            Dây<span>chuyền</span>
                                        </h2>
                                        <a
                                            href="shop.html"
                                            className="btn btn-text"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-sm-6">
                                <figure className="banner-statistics mt-20">
                                    <a href="#">
                                        <img
                                            src="assets/img/banner/img4-top.jpg"
                                            alt="product banner"
                                        />
                                    </a>
                                    <div className="banner-content text-right">
                                        <h5 className="banner-text1">
                                            NEW DESIGN
                                        </h5>
                                        <h2 className="banner-text2">
                                            Kim cương<span>Trang sức</span>
                                        </h2>
                                        <a
                                            href="shop.html"
                                            className="btn btn-text"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                {/* banner statistics area end */}
                {/* product area start */}
                <section className="product-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* section title start */}
                                <div className="section-title text-center">
                                    <h2 className="title">
                                        Sản phẩm của chúng tôi
                                    </h2>
                                    <p className="sub-title">
                                        Thêm sản phẩm của chúng tôi vào danh
                                        sách hàng tuần
                                    </p>
                                </div>
                                {/* section title start */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="product-container">
                                    {/* product tab menu start */}
                                    <div className="product-tab-menu">
                                        <ul className="nav justify-content-center">
                                            <li>
                                                <a
                                                    href="#tab1"
                                                    className="active"
                                                    data-bs-toggle="tab"
                                                >
                                                    Entertainment
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#tab2"
                                                    data-bs-toggle="tab"
                                                >
                                                    Storage
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#tab3"
                                                    data-bs-toggle="tab"
                                                >
                                                    Lying
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#tab4"
                                                    data-bs-toggle="tab"
                                                >
                                                    Tables
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* product tab menu end */}
                                    {/* product tab content start */}
                                    <div className="tab-content">
                                        <div
                                            className="tab-pane fade show active"
                                            id="tab1"
                                        >
                                            <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-1.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-18.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>10%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    Gold
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Perfect Diamond
                                                                Jewelry
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $60.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $70.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-2.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-17.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>
                                                                    sale
                                                                </span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    mony
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                Necklace
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $50.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $80.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-3.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-16.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    Diamond
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Perfect Diamond
                                                                Jewelry
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $99.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-4.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-15.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>
                                                                    sale
                                                                </span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>15%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    silver
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Diamond
                                                                Exclusive
                                                                Ornament
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $55.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $75.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-5.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-14.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>20%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    mony
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Citygold
                                                                Exclusive Ring
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $60.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $70.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="tab2"
                                        >
                                            <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-6.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-13.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>10%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    Gold
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Perfect Diamond
                                                                Jewelry
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $60.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $70.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-7.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-12.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>
                                                                    sale
                                                                </span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    mony
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                Necklace
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $50.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $80.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-8.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-11.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    Diamond
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Perfect Diamond
                                                                Jewelry
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $99.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-9.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-10.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>
                                                                    sale
                                                                </span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>15%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    silver
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Diamond
                                                                Exclusive
                                                                Ornament
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $55.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $75.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-10.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-9.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>20%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    mony
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Citygold
                                                                Exclusive Ring
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $60.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $70.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="tab3"
                                        >
                                            <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-11.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-8.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>10%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    Gold
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Perfect Diamond
                                                                Jewelry
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $60.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $70.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-12.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-7.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>
                                                                    sale
                                                                </span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    mony
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                Necklace
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $50.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $80.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-13.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-6.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    Diamond
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Perfect Diamond
                                                                Jewelry
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $99.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-14.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-5.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>
                                                                    sale
                                                                </span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>15%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    silver
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Diamond
                                                                Exclusive
                                                                Ornament
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $55.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $75.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-15.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-4.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>20%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    mony
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Citygold
                                                                Exclusive Ring
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $60.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $70.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="tab4"
                                        >
                                            <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-16.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-3.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>10%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    Gold
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Perfect Diamond
                                                                Jewelry
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $60.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $70.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-17.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-2.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>
                                                                    sale
                                                                </span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    mony
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                Necklace
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $50.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $80.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-18.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-1.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    Diamond
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Perfect Diamond
                                                                Jewelry
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $99.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-12.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-9.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>
                                                                    sale
                                                                </span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>15%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    silver
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Diamond
                                                                Exclusive
                                                                Ornament
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $55.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $75.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                                {/* product item start */}
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                className="pri-img"
                                                                src="assets/img/product/product-7.jpg"
                                                                alt="product"
                                                            />
                                                            <img
                                                                className="sec-img"
                                                                src="assets/img/product/product-14.jpg"
                                                                alt="product"
                                                            />
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>20%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a
                                                                href="wishlist.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to wishlist"
                                                            >
                                                                <i className="pe-7s-like" />
                                                            </a>
                                                            <a
                                                                href="compare.html"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="left"
                                                                title="Add to Compare"
                                                            >
                                                                <i className="pe-7s-refresh-2" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view"
                                                            >
                                                                <span
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Quick View"
                                                                >
                                                                    <i className="pe-7s-search" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">
                                                                add to cart
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                <a href="product-details.html">
                                                                    mony
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li>
                                                                <a
                                                                    className="c-lightblue"
                                                                    href="#"
                                                                    title="LightSteelblue"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-darktan"
                                                                    href="#"
                                                                    title="Darktan"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-grey"
                                                                    href="#"
                                                                    title="Grey"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="c-brown"
                                                                    href="#"
                                                                    title="Brown"
                                                                />
                                                            </li>
                                                        </ul>
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">
                                                                Citygold
                                                                Exclusive Ring
                                                            </a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $60.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $70.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* product item end */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* product tab content end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* product area end */}
                {/* product banner statistics area start */}
                <section className="product-banner-statistics">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="product-banner-carousel slick-row-10">
                                    {/* banner single slide start */}
                                    <div className="banner-slide-item">
                                        <figure className="banner-statistics">
                                            <a href="#">
                                                <img
                                                    src="assets/img/banner/img1-middle.jpg"
                                                    alt="product banner"
                                                />
                                            </a>
                                            <div className="banner-content banner-content_style2">
                                                <h5 className="banner-text3">
                                                    <a href="#">BRACELATES</a>
                                                </h5>
                                            </div>
                                        </figure>
                                    </div>
                                    {/* banner single slide start */}
                                    {/* banner single slide start */}
                                    <div className="banner-slide-item">
                                        <figure className="banner-statistics">
                                            <a href="#">
                                                <img
                                                    src="assets/img/banner/img2-middle.jpg"
                                                    alt="product banner"
                                                />
                                            </a>
                                            <div className="banner-content banner-content_style2">
                                                <h5 className="banner-text3">
                                                    <a href="#">EARRINGS</a>
                                                </h5>
                                            </div>
                                        </figure>
                                    </div>
                                    {/* banner single slide start */}
                                    {/* banner single slide start */}
                                    <div className="banner-slide-item">
                                        <figure className="banner-statistics">
                                            <a href="#">
                                                <img
                                                    src="assets/img/banner/img3-middle.jpg"
                                                    alt="product banner"
                                                />
                                            </a>
                                            <div className="banner-content banner-content_style2">
                                                <h5 className="banner-text3">
                                                    <a href="#">NECJLACES</a>
                                                </h5>
                                            </div>
                                        </figure>
                                    </div>
                                    {/* banner single slide start */}
                                    {/* banner single slide start */}
                                    <div className="banner-slide-item">
                                        <figure className="banner-statistics">
                                            <a href="#">
                                                <img
                                                    src="assets/img/banner/img4-middle.jpg"
                                                    alt="product banner"
                                                />
                                            </a>
                                            <div className="banner-content banner-content_style2">
                                                <h5 className="banner-text3">
                                                    <a href="#">RINGS</a>
                                                </h5>
                                            </div>
                                        </figure>
                                    </div>
                                    {/* banner single slide start */}
                                    {/* banner single slide start */}
                                    <div className="banner-slide-item">
                                        <figure className="banner-statistics">
                                            <a href="#">
                                                <img
                                                    src="assets/img/banner/img5-middle.jpg"
                                                    alt="product banner"
                                                />
                                            </a>
                                            <div className="banner-content banner-content_style2">
                                                <h5 className="banner-text3">
                                                    <a href="#">PEARLS</a>
                                                </h5>
                                            </div>
                                        </figure>
                                    </div>
                                    {/* banner single slide start */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* product banner statistics area end */}
                {/* featured product area start */}
                <section className="feature-product section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* section title start */}
                                <div className="section-title text-center">
                                    <h2 className="title">Sản phẩm nổi bật</h2>
                                    <p className="sub-title">
                                        Thêm sản phẩm nổi bật vào dòng sản phẩm
                                        hàng tuần
                                    </p>
                                </div>
                                {/* section title start */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="product-carousel-4_2 slick-row-10 slick-arrow-style">
                                    {/* product item start */}
                                    <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img
                                                    className="pri-img"
                                                    src="assets/img/product/product-6.jpg"
                                                    alt="product"
                                                />
                                                <img
                                                    className="sec-img"
                                                    src="assets/img/product/product-13.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                            <div className="product-badge">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>10%</span>
                                                </div>
                                            </div>
                                            <div className="button-group">
                                                <a
                                                    href="wishlist.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i className="pe-7s-like" />
                                                </a>
                                                <a
                                                    href="compare.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to Compare"
                                                >
                                                    <i className="pe-7s-refresh-2" />
                                                </a>
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quick_view"
                                                >
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Quick View"
                                                    >
                                                        <i className="pe-7s-search" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">
                                                    add to cart
                                                </button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name">
                                                    <a href="product-details.html">
                                                        Gold
                                                    </a>
                                                </p>
                                            </div>
                                            <ul className="color-categories">
                                                <li>
                                                    <a
                                                        className="c-lightblue"
                                                        href="#"
                                                        title="LightSteelblue"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-darktan"
                                                        href="#"
                                                        title="Darktan"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-grey"
                                                        href="#"
                                                        title="Grey"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-brown"
                                                        href="#"
                                                        title="Brown"
                                                    />
                                                </li>
                                            </ul>
                                            <h6 className="product-name">
                                                <a href="product-details.html">
                                                    Perfect Diamond Jewelry
                                                </a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">
                                                    $60.00
                                                </span>
                                                <span className="price-old">
                                                    <del>$70.00</del>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product item end */}
                                    {/* product item start */}
                                    <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img
                                                    className="pri-img"
                                                    src="assets/img/product/product-7.jpg"
                                                    alt="product"
                                                />
                                                <img
                                                    className="sec-img"
                                                    src="assets/img/product/product-9.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                            <div className="product-badge">
                                                <div className="product-label new">
                                                    <span>sale</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="button-group">
                                                <a
                                                    href="wishlist.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i className="pe-7s-like" />
                                                </a>
                                                <a
                                                    href="compare.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to Compare"
                                                >
                                                    <i className="pe-7s-refresh-2" />
                                                </a>
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quick_view"
                                                >
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Quick View"
                                                    >
                                                        <i className="pe-7s-search" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">
                                                    add to cart
                                                </button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name">
                                                    <a href="product-details.html">
                                                        mony
                                                    </a>
                                                </p>
                                            </div>
                                            <ul className="color-categories">
                                                <li>
                                                    <a
                                                        className="c-lightblue"
                                                        href="#"
                                                        title="LightSteelblue"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-darktan"
                                                        href="#"
                                                        title="Darktan"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-grey"
                                                        href="#"
                                                        title="Grey"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-brown"
                                                        href="#"
                                                        title="Brown"
                                                    />
                                                </li>
                                            </ul>
                                            <h6 className="product-name">
                                                <a href="product-details.html">
                                                    Handmade Golden Necklace
                                                </a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">
                                                    $50.00
                                                </span>
                                                <span className="price-old">
                                                    <del>$80.00</del>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product item end */}
                                    {/* product item start */}
                                    <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img
                                                    className="pri-img"
                                                    src="assets/img/product/product-8.jpg"
                                                    alt="product"
                                                />
                                                <img
                                                    className="sec-img"
                                                    src="assets/img/product/product-11.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                            <div className="product-badge">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="button-group">
                                                <a
                                                    href="wishlist.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i className="pe-7s-like" />
                                                </a>
                                                <a
                                                    href="compare.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to Compare"
                                                >
                                                    <i className="pe-7s-refresh-2" />
                                                </a>
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quick_view"
                                                >
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Quick View"
                                                    >
                                                        <i className="pe-7s-search" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">
                                                    add to cart
                                                </button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name">
                                                    <a href="product-details.html">
                                                        Diamond
                                                    </a>
                                                </p>
                                            </div>
                                            <ul className="color-categories">
                                                <li>
                                                    <a
                                                        className="c-lightblue"
                                                        href="#"
                                                        title="LightSteelblue"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-darktan"
                                                        href="#"
                                                        title="Darktan"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-grey"
                                                        href="#"
                                                        title="Grey"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-brown"
                                                        href="#"
                                                        title="Brown"
                                                    />
                                                </li>
                                            </ul>
                                            <h6 className="product-name">
                                                <a href="product-details.html">
                                                    Perfect Diamond Jewelry
                                                </a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">
                                                    $99.00
                                                </span>
                                                <span className="price-old">
                                                    <del />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product item end */}
                                    {/* product item start */}
                                    <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img
                                                    className="pri-img"
                                                    src="assets/img/product/product-16.jpg"
                                                    alt="product"
                                                />
                                                <img
                                                    className="sec-img"
                                                    src="assets/img/product/product-10.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                            <div className="product-badge">
                                                <div className="product-label new">
                                                    <span>sale</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>15%</span>
                                                </div>
                                            </div>
                                            <div className="button-group">
                                                <a
                                                    href="wishlist.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i className="pe-7s-like" />
                                                </a>
                                                <a
                                                    href="compare.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to Compare"
                                                >
                                                    <i className="pe-7s-refresh-2" />
                                                </a>
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quick_view"
                                                >
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Quick View"
                                                    >
                                                        <i className="pe-7s-search" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">
                                                    add to cart
                                                </button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name">
                                                    <a href="product-details.html">
                                                        silver
                                                    </a>
                                                </p>
                                            </div>
                                            <ul className="color-categories">
                                                <li>
                                                    <a
                                                        className="c-lightblue"
                                                        href="#"
                                                        title="LightSteelblue"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-darktan"
                                                        href="#"
                                                        title="Darktan"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-grey"
                                                        href="#"
                                                        title="Grey"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-brown"
                                                        href="#"
                                                        title="Brown"
                                                    />
                                                </li>
                                            </ul>
                                            <h6 className="product-name">
                                                <a href="product-details.html">
                                                    Diamond Exclusive Ornament
                                                </a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">
                                                    $55.00
                                                </span>
                                                <span className="price-old">
                                                    <del>$75.00</del>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product item end */}
                                    {/* product item start */}
                                    <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img
                                                    className="pri-img"
                                                    src="assets/img/product/product-10.jpg"
                                                    alt="product"
                                                />
                                                <img
                                                    className="sec-img"
                                                    src="assets/img/product/product-9.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                            <div className="product-badge">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>20%</span>
                                                </div>
                                            </div>
                                            <div className="button-group">
                                                <a
                                                    href="wishlist.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i className="pe-7s-like" />
                                                </a>
                                                <a
                                                    href="compare.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to Compare"
                                                >
                                                    <i className="pe-7s-refresh-2" />
                                                </a>
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quick_view"
                                                >
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Quick View"
                                                    >
                                                        <i className="pe-7s-search" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">
                                                    add to cart
                                                </button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name">
                                                    <a href="product-details.html">
                                                        mony
                                                    </a>
                                                </p>
                                            </div>
                                            <ul className="color-categories">
                                                <li>
                                                    <a
                                                        className="c-lightblue"
                                                        href="#"
                                                        title="LightSteelblue"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-darktan"
                                                        href="#"
                                                        title="Darktan"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-grey"
                                                        href="#"
                                                        title="Grey"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-brown"
                                                        href="#"
                                                        title="Brown"
                                                    />
                                                </li>
                                            </ul>
                                            <h6 className="product-name">
                                                <a href="product-details.html">
                                                    Citygold Exclusive Ring
                                                </a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">
                                                    $60.00
                                                </span>
                                                <span className="price-old">
                                                    <del>$70.00</del>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product item end */}
                                    {/* product item start */}
                                    <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img
                                                    className="pri-img"
                                                    src="assets/img/product/product-1.jpg"
                                                    alt="product"
                                                />
                                                <img
                                                    className="sec-img"
                                                    src="assets/img/product/product-18.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                            <div className="product-badge">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>10%</span>
                                                </div>
                                            </div>
                                            <div className="button-group">
                                                <a
                                                    href="wishlist.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i className="pe-7s-like" />
                                                </a>
                                                <a
                                                    href="compare.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to Compare"
                                                >
                                                    <i className="pe-7s-refresh-2" />
                                                </a>
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quick_view"
                                                >
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Quick View"
                                                    >
                                                        <i className="pe-7s-search" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">
                                                    add to cart
                                                </button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name">
                                                    <a href="product-details.html">
                                                        Gold
                                                    </a>
                                                </p>
                                            </div>
                                            <ul className="color-categories">
                                                <li>
                                                    <a
                                                        className="c-lightblue"
                                                        href="#"
                                                        title="LightSteelblue"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-darktan"
                                                        href="#"
                                                        title="Darktan"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-grey"
                                                        href="#"
                                                        title="Grey"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-brown"
                                                        href="#"
                                                        title="Brown"
                                                    />
                                                </li>
                                            </ul>
                                            <h6 className="product-name">
                                                <a href="product-details.html">
                                                    Perfect Diamond Jewelry
                                                </a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">
                                                    $60.00
                                                </span>
                                                <span className="price-old">
                                                    <del>$70.00</del>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product item end */}
                                    {/* product item start */}
                                    <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img
                                                    className="pri-img"
                                                    src="assets/img/product/product-2.jpg"
                                                    alt="product"
                                                />
                                                <img
                                                    className="sec-img"
                                                    src="assets/img/product/product-17.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                            <div className="product-badge">
                                                <div className="product-label new">
                                                    <span>sale</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="button-group">
                                                <a
                                                    href="wishlist.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i className="pe-7s-like" />
                                                </a>
                                                <a
                                                    href="compare.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to Compare"
                                                >
                                                    <i className="pe-7s-refresh-2" />
                                                </a>
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quick_view"
                                                >
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Quick View"
                                                    >
                                                        <i className="pe-7s-search" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">
                                                    add to cart
                                                </button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name">
                                                    <a href="product-details.html">
                                                        mony
                                                    </a>
                                                </p>
                                            </div>
                                            <ul className="color-categories">
                                                <li>
                                                    <a
                                                        className="c-lightblue"
                                                        href="#"
                                                        title="LightSteelblue"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-darktan"
                                                        href="#"
                                                        title="Darktan"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-grey"
                                                        href="#"
                                                        title="Grey"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-brown"
                                                        href="#"
                                                        title="Brown"
                                                    />
                                                </li>
                                            </ul>
                                            <h6 className="product-name">
                                                <a href="product-details.html">
                                                    Handmade Golden Necklace
                                                </a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">
                                                    $50.00
                                                </span>
                                                <span className="price-old">
                                                    <del>$80.00</del>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product item end */}
                                    {/* product item start */}
                                    <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img
                                                    className="pri-img"
                                                    src="assets/img/product/product-3.jpg"
                                                    alt="product"
                                                />
                                                <img
                                                    className="sec-img"
                                                    src="assets/img/product/product-16.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                            <div className="product-badge">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                            </div>
                                            <div className="button-group">
                                                <a
                                                    href="wishlist.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i className="pe-7s-like" />
                                                </a>
                                                <a
                                                    href="compare.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to Compare"
                                                >
                                                    <i className="pe-7s-refresh-2" />
                                                </a>
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quick_view"
                                                >
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Quick View"
                                                    >
                                                        <i className="pe-7s-search" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">
                                                    add to cart
                                                </button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name">
                                                    <a href="product-details.html">
                                                        Diamond
                                                    </a>
                                                </p>
                                            </div>
                                            <ul className="color-categories">
                                                <li>
                                                    <a
                                                        className="c-lightblue"
                                                        href="#"
                                                        title="LightSteelblue"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-darktan"
                                                        href="#"
                                                        title="Darktan"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-grey"
                                                        href="#"
                                                        title="Grey"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-brown"
                                                        href="#"
                                                        title="Brown"
                                                    />
                                                </li>
                                            </ul>
                                            <h6 className="product-name">
                                                <a href="product-details.html">
                                                    Perfect Diamond Jewelry
                                                </a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">
                                                    $99.00
                                                </span>
                                                <span className="price-old">
                                                    <del />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product item end */}
                                    {/* product item start */}
                                    <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img
                                                    className="pri-img"
                                                    src="assets/img/product/product-4.jpg"
                                                    alt="product"
                                                />
                                                <img
                                                    className="sec-img"
                                                    src="assets/img/product/product-15.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                            <div className="product-badge">
                                                <div className="product-label new">
                                                    <span>sale</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>15%</span>
                                                </div>
                                            </div>
                                            <div className="button-group">
                                                <a
                                                    href="wishlist.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i className="pe-7s-like" />
                                                </a>
                                                <a
                                                    href="compare.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to Compare"
                                                >
                                                    <i className="pe-7s-refresh-2" />
                                                </a>
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quick_view"
                                                >
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Quick View"
                                                    >
                                                        <i className="pe-7s-search" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">
                                                    add to cart
                                                </button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name">
                                                    <a href="product-details.html">
                                                        silver
                                                    </a>
                                                </p>
                                            </div>
                                            <ul className="color-categories">
                                                <li>
                                                    <a
                                                        className="c-lightblue"
                                                        href="#"
                                                        title="LightSteelblue"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-darktan"
                                                        href="#"
                                                        title="Darktan"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-grey"
                                                        href="#"
                                                        title="Grey"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-brown"
                                                        href="#"
                                                        title="Brown"
                                                    />
                                                </li>
                                            </ul>
                                            <h6 className="product-name">
                                                <a href="product-details.html">
                                                    Diamond Exclusive Ornament
                                                </a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">
                                                    $55.00
                                                </span>
                                                <span className="price-old">
                                                    <del>$75.00</del>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product item end */}
                                    {/* product item start */}
                                    <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img
                                                    className="pri-img"
                                                    src="assets/img/product/product-5.jpg"
                                                    alt="product"
                                                />
                                                <img
                                                    className="sec-img"
                                                    src="assets/img/product/product-14.jpg"
                                                    alt="product"
                                                />
                                            </a>
                                            <div className="product-badge">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>20%</span>
                                                </div>
                                            </div>
                                            <div className="button-group">
                                                <a
                                                    href="wishlist.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i className="pe-7s-like" />
                                                </a>
                                                <a
                                                    href="compare.html"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to Compare"
                                                >
                                                    <i className="pe-7s-refresh-2" />
                                                </a>
                                                <a
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quick_view"
                                                >
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Quick View"
                                                    >
                                                        <i className="pe-7s-search" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">
                                                    add to cart
                                                </button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name">
                                                    <a href="product-details.html">
                                                        mony
                                                    </a>
                                                </p>
                                            </div>
                                            <ul className="color-categories">
                                                <li>
                                                    <a
                                                        className="c-lightblue"
                                                        href="#"
                                                        title="LightSteelblue"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-darktan"
                                                        href="#"
                                                        title="Darktan"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-grey"
                                                        href="#"
                                                        title="Grey"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="c-brown"
                                                        href="#"
                                                        title="Brown"
                                                    />
                                                </li>
                                            </ul>
                                            <h6 className="product-name">
                                                <a href="product-details.html">
                                                    Citygold Exclusive Ring
                                                </a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">
                                                    $60.00
                                                </span>
                                                <span className="price-old">
                                                    <del>$70.00</del>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product item end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* featured product area end */}
                {/* testimonial area start */}
                <section
                    className="testimonial-area section-padding bg-img"
                    data-bg="assets/img/testimonial/testimonials-bg.jpg"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* section title start */}
                                <div className="section-title text-center">
                                    <h2 className="title">Chứng nhận</h2>
                                    <p className="sub-title">Họ nói gì?</p>
                                </div>
                                {/* section title start */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="testimonial-thumb-wrapper">
                                    <div className="testimonial-thumb-carousel">
                                        <div className="testimonial-thumb">
                                            <img
                                                src="assets/img/testimonial/testimonial-1.png"
                                                alt="testimonial-thumb"
                                            />
                                        </div>
                                        <div className="testimonial-thumb">
                                            <img
                                                src="assets/img/testimonial/testimonial-2.png"
                                                alt="testimonial-thumb"
                                            />
                                        </div>
                                        <div className="testimonial-thumb">
                                            <img
                                                src="assets/img/testimonial/testimonial-3.png"
                                                alt="testimonial-thumb"
                                            />
                                        </div>
                                        <div className="testimonial-thumb">
                                            <img
                                                src="assets/img/testimonial/testimonial-2.png"
                                                alt="testimonial-thumb"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-content-wrapper">
                                    <div className="testimonial-content-carousel">
                                        <div className="testimonial-content">
                                            <p>
                                                Vivamus a lobortis ipsum, vel
                                                condimentum magna. Etiam id
                                                turpis tortor. Nunc scelerisque,
                                                nisi a blandit varius, nunc
                                                purus venenatis ligula, sed
                                                venenatis orci augue nec sapien.
                                                Cum sociis natoque
                                            </p>
                                            <div className="ratings">
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                            </div>
                                            <h5 className="testimonial-author">
                                                lindsy niloms
                                            </h5>
                                        </div>
                                        <div className="testimonial-content">
                                            <p>
                                                Vivamus a lobortis ipsum, vel
                                                condimentum magna. Etiam id
                                                turpis tortor. Nunc scelerisque,
                                                nisi a blandit varius, nunc
                                                purus venenatis ligula, sed
                                                venenatis orci augue nec sapien.
                                                Cum sociis natoque
                                            </p>
                                            <div className="ratings">
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                            </div>
                                            <h5 className="testimonial-author">
                                                Daisy Millan
                                            </h5>
                                        </div>
                                        <div className="testimonial-content">
                                            <p>
                                                Vivamus a lobortis ipsum, vel
                                                condimentum magna. Etiam id
                                                turpis tortor. Nunc scelerisque,
                                                nisi a blandit varius, nunc
                                                purus venenatis ligula, sed
                                                venenatis orci augue nec sapien.
                                                Cum sociis natoque
                                            </p>
                                            <div className="ratings">
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                            </div>
                                            <h5 className="testimonial-author">
                                                Anamika lusy
                                            </h5>
                                        </div>
                                        <div className="testimonial-content">
                                            <p>
                                                Vivamus a lobortis ipsum, vel
                                                condimentum magna. Etiam id
                                                turpis tortor. Nunc scelerisque,
                                                nisi a blandit varius, nunc
                                                purus venenatis ligula, sed
                                                venenatis orci augue nec sapien.
                                                Cum sociis natoque
                                            </p>
                                            <div className="ratings">
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                                <span>
                                                    <i className="fa fa-star-o" />
                                                </span>
                                            </div>
                                            <h5 className="testimonial-author">
                                                Maria Mora
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial area end */}
                {/* group product start */}
                <section className="group-product-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="group-product-banner">
                                    <figure className="banner-statistics">
                                        <a href="#">
                                            <img
                                                src="assets/img/banner/img-bottom-banner.jpg"
                                                alt="product banner"
                                            />
                                        </a>
                                        <div className="banner-content banner-content_style3 text-center">
                                            <h6 className="banner-text1">
                                                BEAUTIFUL
                                            </h6>
                                            <h2 className="banner-text2">
                                                Wedding Rings
                                            </h2>
                                            <a
                                                href="shop.html"
                                                className="btn btn-text"
                                            >
                                                Shop Now
                                            </a>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories-group-wrapper">
                                    {/* section title start */}
                                    <div className="section-title-append">
                                        <h4>best seller product</h4>
                                        <div className="slick-append" />
                                    </div>
                                    {/* section title start */}
                                    {/* group list carousel start */}
                                    <div className="group-list-item-wrapper">
                                        <div className="group-list-carousel">
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-1.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Diamond
                                                                Exclusive ring
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $50.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $29.99
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-3.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                ring
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $55.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $30.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-5.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                exclusive gold
                                                                Jewelry
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $45.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $25.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-7.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Perfect Diamond
                                                                earring
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $50.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $29.99
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-9.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                Necklace
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $90.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>$100.</del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-11.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                Necklace
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $20.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $30.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-13.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                ring
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $55.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $30.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-15.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                exclusive gold
                                                                Jewelry
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $45.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $25.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                        </div>
                                    </div>
                                    {/* group list carousel start */}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories-group-wrapper">
                                    {/* section title start */}
                                    <div className="section-title-append">
                                        <h4>on-sale product</h4>
                                        <div className="slick-append" />
                                    </div>
                                    {/* section title start */}
                                    {/* group list carousel start */}
                                    <div className="group-list-item-wrapper">
                                        <div className="group-list-carousel">
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-17.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                Necklace
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $50.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $29.99
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-16.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                Necklaces
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $55.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $30.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-12.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                exclusive silver
                                                                top bracellet
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $45.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $25.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-11.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                top Perfect
                                                                Diamond necklace
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $50.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $29.99
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-7.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Diamond
                                                                Exclusive
                                                                earrings
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $90.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>$100.</del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-2.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Padora top
                                                                exclusive
                                                                jewellry
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $20.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $30.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-18.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                Handmade Golden
                                                                ring
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $55.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $30.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                            {/* group list item start */}
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img
                                                                src="assets/img/product/product-14.jpg"
                                                                alt
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name">
                                                            <a href="product-details.html">
                                                                exclusive gold
                                                                Jewelry
                                                            </a>
                                                        </h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">
                                                                $45.00
                                                            </span>
                                                            <span className="price-old">
                                                                <del>
                                                                    $25.00
                                                                </del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* group list item end */}
                                        </div>
                                    </div>
                                    {/* group list carousel start */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* group product end */}
                {/* latest blog area start */}
                <section className="latest-blog-area section-padding pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* section title start */}
                                <div className="section-title text-center">
                                    <h2 className="title">Blog mới nhất</h2>
                                    <p className="sub-title">
                                        Có những bài viết blog mới nhất
                                    </p>
                                </div>
                                {/* section title start */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="blog-carousel-active slick-row-10 slick-arrow-style">
                                    {/* blog post item start */}
                                    <div className="blog-post-item">
                                        <figure className="blog-thumb">
                                            <a href="blog-details.html">
                                                <img
                                                    src="assets/img/blog/blog-img1.jpg"
                                                    alt="blog image"
                                                />
                                            </a>
                                        </figure>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <p>
                                                    25/03/2019 |{" "}
                                                    <a href="#">Padora</a>
                                                </p>
                                            </div>
                                            <h5 className="blog-title">
                                                <a href="blog-details.html">
                                                    Celebrity Daughter Opens Up
                                                    About Having Her Eye Color
                                                    Changed
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                    {/* blog post item end */}
                                    {/* blog post item start */}
                                    <div className="blog-post-item">
                                        <figure className="blog-thumb">
                                            <a href="blog-details.html">
                                                <img
                                                    src="assets/img/blog/blog-img2.jpg"
                                                    alt="blog image"
                                                />
                                            </a>
                                        </figure>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <p>
                                                    25/03/2019 |{" "}
                                                    <a href="#">Padora</a>
                                                </p>
                                            </div>
                                            <h5 className="blog-title">
                                                <a href="blog-details.html">
                                                    Children Left Home Alone For
                                                    4 Days In TV series
                                                    Experiment
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                    {/* blog post item end */}
                                    {/* blog post item start */}
                                    <div className="blog-post-item">
                                        <figure className="blog-thumb">
                                            <a href="blog-details.html">
                                                <img
                                                    src="assets/img/blog/blog-img3.jpg"
                                                    alt="blog image"
                                                />
                                            </a>
                                        </figure>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <p>
                                                    25/03/2019 |{" "}
                                                    <a href="#">Padora</a>
                                                </p>
                                            </div>
                                            <h5 className="blog-title">
                                                <a href="blog-details.html">
                                                    Lotto Winner Offering Up
                                                    Money To Any Man That Will
                                                    Date Her
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                    {/* blog post item end */}
                                    {/* blog post item start */}
                                    <div className="blog-post-item">
                                        <figure className="blog-thumb">
                                            <a href="blog-details.html">
                                                <img
                                                    src="assets/img/blog/blog-img4.jpg"
                                                    alt="blog image"
                                                />
                                            </a>
                                        </figure>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <p>
                                                    25/03/2019 |{" "}
                                                    <a href="#">Padora</a>
                                                </p>
                                            </div>
                                            <h5 className="blog-title">
                                                <a href="blog-details.html">
                                                    People are Willing Lie When
                                                    Comes Money, According to
                                                    Research
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                    {/* blog post item end */}
                                    {/* blog post item start */}
                                    <div className="blog-post-item">
                                        <figure className="blog-thumb">
                                            <a href="blog-details.html">
                                                <img
                                                    src="assets/img/blog/blog-img5.jpg"
                                                    alt="blog image"
                                                />
                                            </a>
                                        </figure>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <p>
                                                    25/03/2019 |{" "}
                                                    <a href="#">Padora</a>
                                                </p>
                                            </div>
                                            <h5 className="blog-title">
                                                <a href="blog-details.html">
                                                    romantic Love Stories Of
                                                    Hollywoodâ€™s Biggest
                                                    Celebrities
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                    {/* blog post item end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* latest blog area end */}
                {/* brand logo area start */}
                <div className="brand-logo section-padding pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="brand-logo-carousel slick-row-10 slick-arrow-style">
                                    {/* single brand start */}
                                    <div className="brand-item">
                                        <a href="#">
                                            <img
                                                src="assets/img/brand/1.png"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    {/* single brand end */}
                                    {/* single brand start */}
                                    <div className="brand-item">
                                        <a href="#">
                                            <img
                                                src="assets/img/brand/2.png"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    {/* single brand end */}
                                    {/* single brand start */}
                                    <div className="brand-item">
                                        <a href="#">
                                            <img
                                                src="assets/img/brand/3.png"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    {/* single brand end */}
                                    {/* single brand start */}
                                    <div className="brand-item">
                                        <a href="#">
                                            <img
                                                src="assets/img/brand/4.png"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    {/* single brand end */}
                                    {/* single brand start */}
                                    <div className="brand-item">
                                        <a href="#">
                                            <img
                                                src="assets/img/brand/5.png"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    {/* single brand end */}
                                    {/* single brand start */}
                                    <div className="brand-item">
                                        <a href="#">
                                            <img
                                                src="assets/img/brand/6.png"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    {/* single brand end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* brand logo area end */}
            </main>
        </>
    );
}

export default HomePage;
