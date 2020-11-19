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
                                    <a class="nav-link scroll" href="#home">Beranda</a>
                                    <a class="nav-link scroll" href="#bumn">Digital</a>
                                    <a class="nav-link scroll" href="#softwareengineer">Software Engineer</a>
                                    <a class="nav-link scroll" href="#it">Kolaborasi</a>
                                    <a class="nav-link scroll" href="#startup">Startup</a>
                                    <a class="nav-link scroll" href="#Daftar">Daftar</a>
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
                                        <a class="nav-link scroll" href="#bumn">Transformasi Digital</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#softwareengineer">Karier Software Engineer</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#it">Kolaborasi Tech Talent</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#startup">Ekosistem Startup Nasional</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link scroll" href="#Daftar">Daftar</a>
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

                                    <a href="https://bit.ly/RegistrasiSDF20" class="btn btn-transparent-white btn-rounded btn-rounded btn-large mt-3">Daftar Sekarang</a>

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
                <section class="single-items center-block parallax" id="bumn" style={{background: "url(innovative/img/raihan-1.jpeg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6"></div>
                            <div class="col-lg-6 center-col">
                                <div class="area-heading text-right wow fadeInRight">
                                    <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-two" href="https://i.imgur.com/ANLGPqA.jpg">Transformasi <strong>Digital</strong></a>
                                    </h3>
                                    <h4 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-four" href="https://i.imgur.com/DfaLATq.jpg"><strong>Transformasi Digital disektor <br/> perbankan, produksi dan pemerintah</strong> </a>
                                    </h4>
                                    <br/>
                                    <br/>
                                    <p class="text-white font-weight-300"><strong>Pigar</strong> - <i>Head of Digital Labs</i>, PT Semen Baturaja</p>
                                    <p class="text-white font-weight-300"><strong>Adelia April Lisianti</strong> - <i>Digital Product Manager</i>, Bank BNI</p>
                                    <p class="text-white font-weight-300"><strong>Hengki Sihombing</strong> - <i>Direktur Operasi Kartu</i>, Prakerja</p>
                                    <p class="text-white font-weight-300"><strong>M Ramadhan A</strong> - <i>VP IT Business Partner & Services</i>, Pusri</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h8 class="area-title text-capitalize alt-font text-white mb-2 font-weight-50">
                                        <a data-fancybox="group-four" href="https://i.imgur.com/DfaLATq.jpg"> <strong>- Sabtu, 28 November 2020 -</strong></a>
                                    </h8>
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
                                        <a data-fancybox="group-two" href="https://i.imgur.com/ANLGPqA.jpg">Karier <strong>Software Engineer</strong></a>
                                    </h3>
                                    <h4 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-four" href="https://i.imgur.com/DfaLATq.jpg"><strong>Berbagi Perjalanan dan Pengalaman dalam Memulai Karir Sebagai <br/> Software Engineer</strong> </a>
                                    </h4>
                                    <br/>
                                    <br/>
                                    <p class="text-white font-weight-300"><strong>Arief Rahmansyah</strong> - <i>Machine Learning Engineer</i>, Gojek Singapore</p>
                                    <p class="text-white font-weight-300"><strong>Faisal Morensya</strong> - <i>Software Engineer</i>, Talabat Dubai</p>
                                    <p class="text-white font-weight-300"><strong>Zaki Al-Afrani</strong> - <i>Technical Architect</i>, Tokopedia</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h8 class="area-title text-capitalize alt-font text-white mb-2 font-weight-50">
                                        <a data-fancybox="group-four" href="https://i.imgur.com/DfaLATq.jpg"> <strong>- Sabtu, 28 November 2020 -</strong></a>
                                    </h8>
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
                                        <a data-fancybox="group-two" href="https://i.imgur.com/ANLGPqA.jpg"><strong>Collaboration</strong> for Tech Sumsel</a>
                                    </h3>
                                    <h4 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-four" href="https://i.imgur.com/DfaLATq.jpg"><strong>Peran Komunitas, Lembaga Kursus dan Kampus <br/> dalam Mengembangkan Talent Digital <br/> di Sumatera Selatan.</strong> </a>
                                    </h4>
                                    <br/>
                                    <br/>
                                    <p class="text-white font-weight-300"><strong>Joneten Saputra</strong> - <i>Head of</i>, Palembang Digital</p>
                                    <p class="text-white font-weight-300"><strong>Ahmad Farisi</strong> - <i>Informatics Lecturer</i>, MDP</p>
                                    <p class="text-white font-weight-300"><strong>Malian Zikri</strong> - <i>CEO</i>, Digital Creative</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h8 class="area-title text-capitalize alt-font text-white mb-2 font-weight-50">
                                        <a data-fancybox="group-four" href="https://i.imgur.com/DfaLATq.jpg"> <strong>- Minggu, 29 November 2020 -</strong></a>
                                    </h8>
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
                                        <a data-fancybox="group-two" href="https://i.imgur.com/ANLGPqA.jpg">Ekosistem <strong>Startup</strong> Nasional</a>
                                    </h3>
                                    <h4 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-four" href="https://i.imgur.com/DfaLATq.jpg"><strong>Startup yang Melirik Kearifan Lokal (Warung, Tambak Ikan, dan Nelayan)</strong> </a>
                                    </h4>
                                    <br/>
                                    <br/>
                                    <p class="text-white font-weight-300"><strong>Farid Naufal</strong> - <i>CEO & Co. Founder</i>, Aruna.id</p>
                                    <p class="text-white font-weight-300"><strong>Sofian Hadiwijaya</strong> - <i>CTO & Co. Founder</i>, Warung Pintar</p>
                                    <p class="text-white font-weight-300"><strong>Gibran Huzaifah</strong> - <i>CEO & Co. Founder</i>, e-Fishery</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h8 class="area-title text-capitalize alt-font text-white mb-2 font-weight-50">
                                        <a data-fancybox="group-four" href="https://i.imgur.com/DfaLATq.jpg"> <strong>- Minggu, 29 November 2020 -</strong></a>
                                    </h8>
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
                                        <a data-fancybox="group-two" href="https://i.imgur.com/ANLGPqA.jpg"><strong>Jadwal</strong> & <strong>Daftar</strong></a>
                                    </h3>
                                    <br/>
                                    <br/>
                                    <h5 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-four" href="https://i.imgur.com/DfaLATq.jpg"><strong>Sabtu, 28 November 2020</strong> </a>
                                    </h5>
                                    <p class="text-white font-weight-300"><strong>Transformasi Digital</strong> : <i>11.00 - 12.30</i></p>
                                    <p class="text-white font-weight-300"><strong>Karier Software Engineer</strong> : <i>13.00 - 14.30</i></p>
                                    <br/>
                                    <h5 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-four" href="https://i.imgur.com/DfaLATq.jpg"><strong>Minggu, 29 November 2020</strong> </a>
                                    </h5>
                                    <p class="text-white font-weight-300"><strong>Collaboration For Talent Tech Sumsel</strong> : <i>10.10 - 11.50</i></p>
                                    <p class="text-white font-weight-300"><strong>Ekosistem Startup Nasional</strong> : <i>13.00 - 14.30</i></p>
                                    <a href="https://bit.ly/RegistrasiSDF20" class="btn btn-transparent-white btn-rounded btn-rounded btn-large mt-3">Daftar Sekarang</a>
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
                                        <a data-fancybox="group-seven" href="https://i.imgur.com/G0CadAX.jpg"><strong>Sponsorship</strong> Partner</a>
                                    </h3>
                                    <p class="text-white">List Sponsorship..</p>
                                    <a class="btn btn-transparent-white btn-rounded btn-large mt-3" data-fancybox="group-eight" href="https://i.imgur.com/G0CadAX.jpg">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--Single portfolio item eight--> */}
                <section class="single-items center-block parallax" id="Daftar" style={{background: "url(innovative/img/raihan-1.jpeg)"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 center-col">
                                <div class="area-heading text-right wow fadeInRight">
                                <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                                        <a data-fancybox="group-seven" href="https://i.imgur.com/G0CadAX.jpg"><strong>Community</strong> Partner</a>
                                    </h3>
                                    <p class="text-white">List Compar..</p>
                                    <a class="btn btn-transparent-white btn-rounded btn-large mt-3" data-fancybox="group-eight" href="https://i.imgur.com/G0CadAX.jpg">View More</a>
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
                                        <a data-fancybox="group-seven" href="https://i.imgur.com/G0CadAX.jpg"><strong>Media</strong> Partner</a>
                                    </h3>
                                    <p class="text-white">List Medpar..</p>
                                    <a class="btn btn-transparent-white btn-rounded btn-large mt-3" data-fancybox="group-eight" href="https://i.imgur.com/G0CadAX.jpg">View More</a>
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
                                        <li><a class="wow fadeInUp" href="https://www.instagram.com/sriwijaya.digital/"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a class="wow fadeInDown" href="https://www.youtube.com/channel/UCd9Y4iUZgfz2y2nYUhIGn0Q/featured?view_as=subscriber"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
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