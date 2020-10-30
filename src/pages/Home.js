import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <!--start loader--> */}
                <div class="loader">
                    <div class="cssload-loader">
                        <div class="cssload-inner cssload-one"></div>
                        <div class="cssload-inner cssload-two"></div>
                        <div class="cssload-inner cssload-three"></div>
                    </div>
                </div>
                {/* <!--loader end--> */}

                {/* <!--Header Start--> */}
                <header>

                    {/* <!--Navigation--> */}
                    <nav class="navbar navbar-top-default navbar-expand-lg navbar-simple nav-box-round">
                        <div class="container">
                            <a href="javascript:void(0)" title="Logo" class="logo scroll">
                                {/* <!--Logo Default--> */}
                                <img src="innovative/img/logo-white.png" alt="logo" class="logo-light default" />
                                {/* <!--Logo Sticky--> */}
                                <img src="innovative/img/logo-black.png" alt="logo" class="logo-dark" />
                            </a>

                            {/* <!--Nav Links--> */}
                            <div class="collapse navbar-collapse" id="megaone">
                                <div class="navbar-nav ml-auto">
                                    <a class="nav-link scroll" href="#home">Home</a>
                                    <a class="nav-link scroll" href="#creative">Creative</a>
                                    <a class="nav-link scroll" href="#social">Social</a>
                                    <a class="nav-link scroll" href="#seo">SEO</a>
                                    <a class="nav-link scroll" href="#marketing">Marketing</a>
                                    <a class="nav-link scroll" href="#agency">Innovative</a>
                                </div>
                            </div>

                            {/* <!--Side Menu Button--> */}
                                <a href="javascript:void(0)" class="d-inline-block sidemenu_btn" id="sidemenu_toggle">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                        </div>
                    </nav>

                    {/* <!--Side Nav--> */}
                    <div class="side-menu hidden">
                        <div class="inner-wrapper">
                            <span class="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
                            <nav class="side-nav w-100">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#home">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#creative">Creative</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#social">Social</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#seo">SEO</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#marketing">Marketing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#agency">Innovative</a>
                                    </li>
                                </ul>
                            </nav>

                            <div class="side-footer text-white w-100">
                                <ul class="social-icons-simple">
                                    <li><a class="facebook-text-hvr" href="javascript:void(0)"><i class="fab fa-facebook-f"></i> </a> </li>
                                    <li><a class="instagram-text-hvr" href="javascript:void(0)"><i class="fab fa-instagram"></i> </a> </li>
                                    <li><a class="twitter-text-hvr" href="javascript:void(0)"><i class="fab fa-twitter"></i> </a> </li>
                                </ul>
                                <p class="text-white">&copy; 2020 MegaOne. Made With Love by Themesindustry</p>
                            </div>
                        </div>
                    </div>
                    <a id="close_side_menu" href="javascript:void(0);"></a>
                    {/* <!-- End side menu --> */}

                </header>
                {/* <!--Header end--> */}

                {/* <!--Single portfolio item one--> */}
                <section class="single-items center-block parallax m-0" id="home" style={{background: "url(innovative/img/single-portfolio1.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 center-col">
                                <div class="area-heading text-center wow fadeInUp">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        Our <strong>Creative </strong>Studio</h3>
                                    <p class="text-white font-weight-300">Graphics, Designing, Branding, Development</p>
                                    <a data-fancybox="group-two" href="innovative/img/single-portfolio1.jpg" class="btn btn-transparent-white btn-rounded btn-rounded btn-large mt-3">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden">
                        <a data-fancybox="group-one" data-thumb="innovative/img/gallery-thumb1.jpg" href="innovative/img/gallery-thumb1.jpg"></a>
                        <a data-fancybox="group-one" data-thumb="innovative/img/gallery-thumb2.jpg" href="innovative/img/gallery-thumb2.jpg"></a>
                        <a data-fancybox="group-one" data-thumb="innovative/img/gallery-thumb3.jpg" href="innovative/img/gallery-thumb3.jpg"></a>
                        <a data-fancybox="group-one" data-thumb="innovative/img/gallery-thumb4.jpg" href="innovative/img/gallery-thumb4.jpg"></a>
                        <a data-fancybox="group-one" data-thumb="innovative/img/gallery-thumb5.jpg" href="innovative/img/gallery-thumb5.jpg"></a>
                    </div>
                </section>

                {/* <!--Single portfolio item two--> */}
                <section class="single-items center-block parallax" id="creative" style={{background: "url(innovative/img/single-portfolio2.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6"></div>
                            <div class="col-lg-6 center-col">
                                <div class="area-heading text-right wow fadeInRight">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-two" href="innovative/img/single-portfolio2.jpg">Be <strong>Innovative</strong></a>
                                    </h3>
                                    <p class="text-white font-weight-300">The integration of web fonts has always been one of the largest contributing factors to diversity in the overall look and feel of websites today just like.</p>
                                    <p class="text-white font-weight-300">Nature, Shore, Stars</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden">
                        <a data-fancybox="group-two" data-thumb="innovative/img/gallery-thumb1.jpg" href="innovative/img/gallery-thumb1.jpg"></a>
                        <a data-fancybox="group-two" data-thumb="innovative/img/gallery-thumb2.jpg" href="innovative/img/gallery-thumb2.jpg"></a>
                        <a data-fancybox="group-two" data-thumb="innovative/img/gallery-thumb3.jpg" href="innovative/img/gallery-thumb3.jpg"></a>
                        <a data-fancybox="group-two" data-thumb="innovative/img/gallery-thumb4.jpg" href="innovative/img/gallery-thumb4.jpg"></a>
                        <a data-fancybox="group-two" data-thumb="innovative/img/gallery-thumb5.jpg" href="innovative/img/gallery-thumb5.jpg"></a>
                    </div>
                </section>

                {/* <!--Single portfolio item three--> */}
                <section class="single-items center-block parallax" id="corporate" style={{background: "url(innovative/img/single-portfolio3.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-8">
                                <div class="area-heading text-left wow fadeInLeft">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-three" href="innovative/img/single-portfolio3.jpg">MegaOne <strong>Studio</strong></a>
                                    </h3>
                                    <p class="text-white">Media, Culture, Colors</p>
                                    <a class="btn btn-transparent-white btn-rounded btn-large mt-3" data-fancybox="group-three" href="innovative/img/single-portfolio3.jpg">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden">
                        <a data-fancybox="group-three" data-thumb="innovative/img/gallery-thumb1.jpg" href="innovative/img/gallery-thumb1.jpg"></a>
                        <a data-fancybox="group-three" data-thumb="innovative/img/gallery-thumb2.jpg" href="innovative/img/gallery-thumb2.jpg"></a>
                        <a data-fancybox="group-three" data-thumb="innovative/img/gallery-thumb3.jpg" href="innovative/img/gallery-thumb3.jpg"></a>
                        <a data-fancybox="group-three" data-thumb="innovative/img/gallery-thumb4.jpg" href="innovative/img/gallery-thumb4.jpg"></a>
                        <a data-fancybox="group-three" data-thumb="innovative/img/gallery-thumb5.jpg" href="innovative/img/gallery-thumb5.jpg"></a>
                    </div>
                </section>

                {/* <!--Single portfolio item four--> */}
                <section class="single-items center-block parallax" id="social" style={{background: "url(innovative/img/single-portfolio4.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 center-col">
                                <div class="area-heading text-right wow fadeInRight">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-four" href="innovative/img/single-portfolio4.jpg">Social <strong> Market</strong></a>
                                    </h3>
                                    <p class="text-white">Creative, Branding, Graphics</p>
                                    <a class="btn btn-transparent-white btn-rounded btn-large mt-3" data-fancybox="group-four" href="innovative/img/single-portfolio4.jpg">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden">
                        <a data-fancybox="group-four" data-thumb="innovative/img/gallery-thumb1.jpg" href="innovative/img/gallery-thumb1.jpg"></a>
                        <a data-fancybox="group-four" data-thumb="innovative/img/gallery-thumb2.jpg" href="innovative/img/gallery-thumb2.jpg"></a>
                        <a data-fancybox="group-four" data-thumb="innovative/img/gallery-thumb3.jpg" href="innovative/img/gallery-thumb3.jpg"></a>
                        <a data-fancybox="group-four" data-thumb="innovative/img/gallery-thumb4.jpg" href="innovative/img/gallery-thumb4.jpg"></a>
                        <a data-fancybox="group-four" data-thumb="innovative/img/gallery-thumb5.jpg" href="innovative/img/gallery-thumb5.jpg"></a>
                    </div>
                </section>

                {/* <!--Single portfolio item five--> */}
                <section class="single-items center-block parallax" id="seo" style={{background: "url(innovative/img/single-portfolio5.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-8">
                                <div class="area-heading text-left wow fadeInLeft">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-five" href="innovative/img/single-portfolio5.jpg">MegaOne <strong>SEO</strong></a>
                                    </h3>
                                    <p class="text-white">The integration of web fonts has always been one of the largest contributing factors to diversity in the overall look and feel of websites today vs, yesterday. Fonts, just like images.</p>
                                    <p class="text-white">Fashion, Graphics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--Single portfolio item six--> */}
                <section class="single-items center-block parallax" id="marketing" style={{background: "url(innovative/img/single-portfolio6.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 center-col">
                                <div class="area-heading text-right wow fadeInRight">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-six" href="innovative/img/single-portfolio6.jpg">MegaOne <strong>Marketing</strong> </a>
                                    </h3>
                                    <p class="text-white">Fashion, Brands, Colors</p>
                                    <a class="btn btn-transparent-white btn-rounded btn-large mt-3" data-fancybox="group-six" href="innovative/img/single-portfolio6.jpg">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden">
                        <a data-fancybox="group-six" data-thumb="innovative/img/gallery-thumb1.jpg" href="innovative/img/gallery-thumb1.jpg"></a>
                        <a data-fancybox="group-six" data-thumb="innovative/img/gallery-thumb2.jpg" href="innovative/img/gallery-thumb2.jpg"></a>
                        <a data-fancybox="group-six" data-thumb="innovative/img/gallery-thumb3.jpg" href="innovative/img/gallery-thumb3.jpg"></a>
                        <a data-fancybox="group-six" data-thumb="innovative/img/gallery-thumb4.jpg" href="innovative/img/gallery-thumb4.jpg"></a>
                        <a data-fancybox="group-six" data-thumb="innovative/img/gallery-thumb5.jpg" href="innovative/img/gallery-thumb5.jpg"></a>
                    </div>
                </section>

                {/* <!--Single portfolio item seven--> */}
                <section class="single-items center-block item-seven parallax" style={{background: "url(innovative/img/single-portfolio7.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-8">
                                <div class="area-heading text-left wow fadeInLeft">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-seven" href="innovative/img/single-portfolio7.jpg">Cultivate <strong>Inspired</strong></a>
                                    </h3>
                                    <p class="text-white">The integration of web fonts has always been one of the largest contributing factors to diversity in the overall look and feel of websites today vs, yesterday. Fonts, just like images.  </p>
                                    <p class="text-white">Fruits, Vegetables</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--Single portfolio item eight--> */}
                <section class="single-items center-block parallax" id="agency" style={{background: "url(innovative/img/single-portfolio8.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 center-col">
                                <div class="area-heading text-right wow fadeInRight">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-eight" href="innovative/img/single-portfolio8.jpg">Best <strong>Solutions</strong></a>
                                    </h3>
                                    <p class="text-white">Creative, Brandind, Graphics</p>
                                    <a class="btn btn-transparent-white btn-rounded btn-large mt-3" data-fancybox="group-eight" href="innovative/img/single-portfolio8.jpg">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden">
                        <a data-fancybox="group-eight" data-thumb="innovative/img/gallery-thumb1.jpg" href="innovative/img/gallery-thumb1.jpg"></a>
                        <a data-fancybox="group-eight" data-thumb="innovative/img/gallery-thumb2.jpg" href="innovative/img/gallery-thumb2.jpg"></a>
                        <a data-fancybox="group-eight" data-thumb="innovative/img/gallery-thumb3.jpg" href="innovative/img/gallery-thumb3.jpg"></a>
                        <a data-fancybox="group-eight" data-thumb="innovative/img/gallery-thumb4.jpg" href="innovative/img/gallery-thumb4.jpg"></a>
                        <a data-fancybox="group-eight" data-thumb="innovative/img/gallery-thumb5.jpg" href="innovative/img/gallery-thumb5.jpg"></a>
                    </div>
                </section>

                {/* <!--Single portfolio item nine--> */}
                <section class="single-items center-block parallax" style={{background: "url(innovative/img/single-portfolio9.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5 col-sm-8 col-xs-11">
                                <div class="area-heading text-left wow fadeInLeft">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-nine" href="innovative/img/single-portfolio9.jpg">Small <strong>Businesses</strong></a>
                                    </h3>
                                    <p class="text-white">The integration of web fonts has always been one of the largest contributing factors to diversity in the overall look and feel of websites today vs, yesterday. Fonts, just like images.  </p>
                                    <p class="text-white">Fruits, Vegetables</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden">
                        <a data-fancybox="group-nine" data-thumb="innovative/img/gallery-thumb1.jpg" href="innovative/img/gallery-thumb1.jpg"></a>
                        <a data-fancybox="group-nine" data-thumb="innovative/img/gallery-thumb2.jpg" href="innovative/img/gallery-thumb2.jpg"></a>
                        <a data-fancybox="group-nine" data-thumb="innovative/img/gallery-thumb3.jpg" href="innovative/img/gallery-thumb3.jpg"></a>
                        <a data-fancybox="group-nine" data-thumb="innovative/img/gallery-thumb4.jpg" href="innovative/img/gallery-thumb4.jpg"></a>
                        <a data-fancybox="group-nine" data-thumb="innovative/img/gallery-thumb5.jpg" href="innovative/img/gallery-thumb5.jpg"></a>
                    </div>
                </section>

                {/* <!--Footer Start--> */}
                <section class="bg-light text-center">
                    <h2 class="d-none">hidden</h2>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="footer-social">
                                    <ul class="list-unstyled">
                                        <li><a class="wow fadeInUp" href="javascript:void(0);"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                        <li><a class="wow fadeInDown" href="javascript:void(0);"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a class="wow fadeInUp" href="javascript:void(0);"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
                                        <li><a class="wow fadeInDown" href="javascript:void(0);"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                                        <li><a class="wow fadeInUp" href="javascript:void(0);"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a class="wow fadeInDown" href="javascript:void(0);"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                                <p class="company-about fadeIn">© 2020 MegaOne. Made With Love By <a href="javascript:void(0);">Themesindustry</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--Footer End--> */}

                {/* <!--Scroll Top--> */}
                <a class="scroll-top-arrow" href="javascript:void(0);"><i class="fas fa-angle-up"></i></a>
                {/* <!--Scroll Top End--> */}
            </div>
        )
    }
}
export default Home