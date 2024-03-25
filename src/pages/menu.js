import React from 'react'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import BasicModal from '@/components/Modal';

function Menu() {
    const [modelOpen, setModelOpen] = useState(false);
    const [starters, setStarters] = useState(0);
    const [veg, setVeg] = useState(0);
    const [nonveg, setNonveg] = useState(0);
    const [ref, inView] = useInView();
    const [refs, inViews] = useInView();
    const [refr, inViewr] = useInView();

    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                if (starters < 198) {
                    setStarters(starters + 1);
                } else {
                    clearInterval(interval);
                }
            }, 10); // Adjust the interval for the desired animation speed
            return () => clearInterval(interval);
        }
    }, [starters, inView]);

    useEffect(() => {
        if (inViews) {
            const interval = setInterval(() => {
                if (veg < 210) {
                    setVeg(veg + 1);
                } else {
                    clearInterval(interval);
                }
            }, 10); // Adjust the interval for the desired animation speed
            return () => clearInterval(interval);
        }
    }, [veg, inViews]);

    useEffect(() => {
        if (inViewr) {
            const interval = setInterval(() => {
                if (nonveg < 120) {
                    setNonveg(nonveg + 1);
                } else {
                    clearInterval(interval);
                }
            }, 10); // Adjust the interval for the desired animation speed
            return () => clearInterval(interval);
        }
    }, [nonveg, inViewr]);

    const handleOpenModel = (flag) => {
        setModelOpen(flag)
    }


    return (
        <>
            <Head>
                <title>Menu - Sunny Executives</title>
                <meta name="description" content="Indulge your senses with the delectable offerings at Sunny Executives in Pune. Browse through our enticing menu featuring culinary delights crafted with care to tantalize your taste buds and elevate your dining experience in Maharashtra." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className='menu-p-container'>
                {modelOpen && <BasicModal handleOpenModel={handleOpenModel} modelOpen={true} />}
                <div className="container-fluid bg-dark px-0">
                    <div className="row gx-0">
                        <div className="col-lg-3 bg-dark d-none d-lg-block">
                            <a href="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <h3 className="m-0 text-primary text-uppercase h3-fz">Sunny Executives</h3>
                            </a>
                        </div>
                        <div className="col-lg-9">
                            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                <a href="/" className="navbar-brand d-block d-lg-none">
                                    <h2 className="m-0 text-primary text-uppercase">Sunny Executives</h2>
                                </a>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div className="navbar-nav mr-auto py-0">
                                        <a href="/" className="nav-item nav-link">Home</a>
                                        <a href="/about" className="nav-item nav-link">About</a>
                                        <a href="/services" className="nav-item nav-link">Services</a>
                                        <a href="/menu" className="nav-item nav-link active">Menu</a>
                                        <a href="/gallery" className="nav-item nav-link">Gallery</a>
                                        <a href="/#rooms" className="nav-item nav-link">Rooms</a>
                                        <a href="/contact" className="nav-item nav-link">Contact</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>


                <div className="container-fluid page-header mb-5 p-0" >
                    <div className="container-fluid page-header-inner py-5">
                        <div className="container text-center pb-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Our Menu</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Menu</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <h6 className="section-title text-start text-primary text-uppercase">Our Menu</h6>
                                <h2 className="mb-4">Have A Glance At Our <span className="text-primary text-uppercase">Menu</span></h2>
                                <p className="mb-4 staff-text">Welcome to Sunny Executives, We offer the best veg and non-veg dishes. Try our special quail, Kadaknath, and duck meats, as well as crab. Enjoy a unique dining experience with us, where each dish reflects our love for great food.</p>
                                <div className="row g-3 pb-4">
                                    <div className="col-sm-4 wow fadeIn veg" data-wow-delay="0.1s">
                                        <img className='veg-non-veg-img' src="/img/veg-meal3.jpg" alt="veg-image" />
                                        {/* <p className='menu-label'>Veg</p>                      */}
                                    </div>
                                    <div className="col-sm-4 wow fadeIn veg" data-wow-delay="0.3s">
                                        <img className='veg-non-veg-img' src="/img/nveg-meal.jpg" alt="non-veg-image" />
                                        {/* <p className='menu-label'>Non Veg</p>   */}
                                    </div>
                                    <div className="col-sm-4 wow fadeIn veg" data-wow-delay="0.5s">
                                        <img className='veg-non-veg-img' src="/img/beer.jpg" alt="bevarages" />
                                        {/* <p className='menu-label'>Bevarages</p>   */}
                                    </div>
                                </div>
                                <p className="btn btn-primary py-3 px-5 mt-2" onClick={() => handleOpenModel(true)}>Explore More</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" alt='menu-images' src="img/nveg5.jpg" />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" alt='menu-images' src="img/nveg2.jpg" />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" alt='menu-images' src="img/nveg3.jpg" />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" alt='menu-images' src="img/nveg4.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h2 className="mb-5">Explore Our Exceptional  <span className="text-primary text-uppercase"> Menu</span></h2>
                </div>
                <div className='menu-container'>
                    <div className='menu-item wow fadeInUp' data-wow-delay="0.1s">
                        <img className='menu-img' src="/img/menu1.jpg" alt='menu-images' />
                    </div>
                    <div className='menu-item wow fadeInUp' data-wow-delay="0.2s">
                        <img className='menu-img' src="/img/menu1.jpg" alt='menu-images' />
                    </div>
                    <div className='menu-item wow fadeInUp' data-wow-delay="0.3s">
                        <img className='menu-img' src="/img/menu1.jpg" alt='menu-images' />
                    </div>
                    <div className='menu-item wow fadeInUp' data-wow-delay="0.4s">
                        <img className='menu-img' src="/img/menu1.jpg" alt='menu-images' />
                    </div>
                    <div className='menu-item wow fadeInUp' data-wow-delay="0.5s">
                        <img className='menu-img' src="/img/menu1.jpg" alt='menu-images' />
                    </div>
                    <div className='menu-item wow fadeInUp' data-wow-delay="0.6s">
                        <img className='menu-img' src="/img/menu1.jpg" alt='menu-images' />
                    </div>
                    <div className='menu-item wow fadeInUp' data-wow-delay="0.7s">
                        <img className='menu-img' src="/img/menu1.jpg" alt='menu-images' />
                    </div>
                    <div className='menu-item wow fadeInUp' data-wow-delay="0.8s">
                        <img className='menu-img' src="/img/menu1.jpg" alt='menu-images' />
                    </div>

                </div>

                <div className="container-fluid bg-dark text-light footer wow fadeIn footer-c footer-mt" data-wow-delay="0.1s">
                    <div className="container pb-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-4">
                                <div className="bg-primary rounded p-4">
                                    <a href="/"><h2 className="text-white text-uppercase mb-3">Sunny Executives</h2></a>
                                    <p className="text-white mb-0">
                                        Pune's lodging services meet diverse needs in the 'Oxford of the East'.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Shikrapur SH.55, Chakan Shikrapur Road, Near Aditya petrol Corp (IOCL, Shikrapur, Maharashtra)</p>
                                <p className='view-in-map'> <i className="fa fa-map-marker-alt me-3"></i> <a target="_blank" href='https://www.google.com/maps/dir//Sunny+family+restaurant+and+bar,+SH.55,+Chakan+Shikrapur+Rd,+near+Aditya+petrol+Corp+(IOCL,+Shikrapur,+Maharashtra+412208/@18.6968706,74.1012745,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2d1c921e28255:0x8de7835f660ba2b0!2m2!1d74.1021328!2d18.6983188?entry=ttu'>view in map</a> </p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 7022318883</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"></i>sunnyexecutives@gmail.com</p>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="row gy-5 g-4">
                                    <div className="col-md-6">
                                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                        <a className="btn btn-link" href="/about">About Us</a>
                                        <a className="btn btn-link" href="/contact">Contact Us</a>
                                        <a className="btn btn-link" href="/services">Services</a>
                                        {/* <a className="btn btn-link" href="">Privacy Policy</a>
                                            <a className="btn btn-link" href="">Terms & Condition</a>
                                            <a className="btn btn-link" href="">Support</a> */}
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                        <a className="btn btn-link" href="#services">Rooms</a>
                                        <a className="btn btn-link" href="#services">Bar & Restaurant</a>
                                        <a className="btn btn-link" href="#services">Event & Party</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Menu