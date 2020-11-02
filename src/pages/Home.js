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
                                    <a class="nav-link scroll" href="#bumn">BUMN Go Digital</a>
                                    <a class="nav-link scroll" href="#startup">Startup</a>
                                    <a class="nav-link scroll" href="#softwareengineer">Software Engineer</a>
                                    <a class="nav-link scroll" href="#it">IT</a>
                                    <a class="nav-link scroll" href="#donasi">Donasi</a>
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
                                        <a class="nav-link scroll" href="#home">Beranda</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#bumn">BUMN Go Digital</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#startup">Startup</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#softwareengineer">Software Engineer</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#it">IT</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#donasi">Donasi</a>
                                    </li>
                                </ul>
                            </nav>

                            <div class="side-footer text-white w-100">
                                <ul class="social-icons-simple">
                                    <li><a class="facebook-text-hvr" href="javascript:void(0)"><i class="fab fa-facebook-f"></i> </a> </li>
                                    <li><a class="instagram-text-hvr" href="javascript:void(0)"><i class="fab fa-instagram"></i> </a> </li>
                                    <li><a class="twitter-text-hvr" href="javascript:void(0)"><i class="fab fa-twitter"></i> </a> </li>
                                </ul>
                                <p class="text-white">&copy; 2020 Sriwijaya Digital. Made With Love by AGT</p>
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
                                        <strong>Sriwijaya</strong> Digital Festival</h3>
                                    <p class="text-white font-weight-300">Persembahan Forum Teknologi Sumatera Selatan</p>
                                    <p class="text-white font-weight-300">Palembang, 28 - 29 November 2020</p>
                                    <a data-fancybox="group-two" href="innovative/img/single-portfolio1.jpg" class="btn btn-transparent-white btn-rounded btn-rounded btn-large mt-3">Donasi Sekarang</a>
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
                <section class="single-items center-block parallax" id="bumn" style={{background: "url(innovative/img/single-portfolio2.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6"></div>
                            <div class="col-lg-6 center-col">
                                <div class="area-heading text-right wow fadeInRight">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-two" href="innovative/img/single-portfolio2.jpg"><strong>BUMN</strong> Go Digital</a>
                                    </h3>
                                    <p class="text-white font-weight-300">Sabtu, 28 November 2020 10:00 - 12:00 PT Pupuk Sriwijaya</p>
                                    <p class="text-white font-weight-300">Sabtu, 28 November 2020 13:00 - 15:00 PT Semen Baturaja</p>
                                    <p class="text-white font-weight-300">Sabtu, 28 November 2020 16:00 - 18:00 PT Bank Rakyat Indonesia, Tbk</p>
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
                                        <a data-fancybox="group-three" href="innovative/img/single-portfolio3.jpg">Tambahan Panel</a>
                                    </h3>
                                    <p class="text-white">Disini untuk space jika ada tambahan panel 28-29 November</p>
                                    <p class="text-white">Bisa juga untuk space iklan dari para sponsor sriwijaya digital</p>
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
                <section class="single-items center-block parallax" id="startup" style={{background: "url(innovative/img/single-portfolio4.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 center-col">
                                <div class="area-heading text-right wow fadeInRight">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-four" href="innovative/img/single-portfolio4.jpg">Startup<strong> Ecosystem</strong></a>
                                    </h3>
                                    <p class="text-white">Minggu, 29 November 2020 - Sofian Hadiwijaya (Warung Pintar)</p>
                                    <p class="text-white">Minggu, 29 November 2020 - Gibran (eFishery)</p>
                                    <p class="text-white">Minggu, 29 November 2020 - Farid (Pasar Laut)</p>
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
                <section class="single-items center-block parallax" id="softwareengineer" style={{background: "url(innovative/img/single-portfolio5.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-8">
                                <div class="area-heading text-left wow fadeInLeft">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-five" href="innovative/img/single-portfolio5.jpg">Software Engineer</a>
                                    </h3>
                                    <p class="text-white">Arief Rahmansyah (GOJEK Singapore)</p>
                                    <p class="text-white">Faisal Morensya (Talabat Dubai)</p>
                                    <p class="text-white">Zaki Al Farani (Tokopedia)</p>
                                    <a class="btn btn-transparent-white btn-rounded btn-large mt-3" data-fancybox="group-three" href="innovative/img/single-portfolio5.jpg">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--Single portfolio item six--> */}
                <section class="single-items center-block parallax" id="it" style={{background: "url(innovative/img/single-portfolio6.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 center-col">
                                <div class="area-heading text-right wow fadeInRight">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-six" href="innovative/img/single-portfolio6.jpg">Information Technology</a>
                                    </h3>
                                    <p class="text-white">Minggu, 29 November 2020 - Roylisto Perdana (Kredivo)</p>
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
                                        <a data-fancybox="group-seven" href="innovative/img/single-portfolio7.jpg">Tambahan <strong>Panel</strong></a>
                                    </h3>
                                    <p class="text-white">Disini untuk space jika ada tambahan panel 28-29 November</p>
                                    <p class="text-white">Bisa juga untuk space iklan dari para sponsor sriwijaya digital</p>
                                    <a class="btn btn-transparent-white btn-rounded btn-large mt-3" data-fancybox="group-eight" href="innovative/img/single-portfolio7.jpg">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--Single portfolio item eight--> */}
                <section class="single-items center-block parallax" id="donasi" style={{background: "url(innovative/img/single-portfolio8.jpg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 center-col">
                                <div class="area-heading text-right wow fadeInRight">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-eight" href="innovative/img/single-portfolio8.jpg">Donasi & <strong>Sponsor</strong></a>
                                    </h3>
                                    <p class="text-white">Disini untuk space untuk para Donator dan Sponsor</p>
                                    <p class="text-white">Bisa juga untuk space endorse dan sejenisnya</p>
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
                                        <a data-fancybox="group-nine" href="innovative/img/single-portfolio9.jpg">Tambahan <strong>Panel</strong></a>
                                    </h3>
                                    <p class="text-white">Disini untuk space jika ada tambahan panel 28-29 November</p>
                                    <p class="text-white">Bisa juga untuk space iklan dari para sponsor sriwijaya digital</p>
                                    <a class="btn btn-transparent-white btn-rounded btn-large mt-3" data-fancybox="group-eight" href="innovative/img/single-portfolio7.jpg">View More</a>
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
                                <p class="company-about fadeIn">© 2020 SriwijayaDigital. Made With Love By <a href="javascript:void(0);">AGT</a></p>
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