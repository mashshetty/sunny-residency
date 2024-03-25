import React from 'react'
import Enquire from '@/components/Enquire'
import Head from 'next/head'

function contact() {
    return (
        <> 
           <Head>
            <title> Contact Us - Sunny Executives</title>
           </Head>
            <div className="container-xxl bg-white p-0">
                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

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
                                    <h2 className="m-0 text-primary text-uppercase">Sunny Bar and Restaurant</h2>
                                </a>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div className="navbar-nav mr-auto py-0">
                                        <a href="/" className="nav-item nav-link">Home</a>
                                        <a href="/about" className="nav-item nav-link">About</a>
                                        <a href="/services" className="nav-item nav-link">Services</a>
                                        <a href="/menu" className="nav-item nav-link">Menu</a>
                                        <a href="/gallery" className="nav-item nav-link">Gallery</a>
                                        <a href="/#rooms" className="nav-item nav-link">Rooms</a>
                                        <a href="/contact" className="nav-item nav-link active">Contact</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container-fluid page-header mb-5 p-0" >
                    <div className="container-fluid page-header-inner py-5">
                        <div className="container text-center pb-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title text-center text-primary text-uppercase">Contact Us</h6>
                            <h2 className="mb-5"><span className="text-primary text-uppercase">Contact</span> For Any Query</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="row gy-4">
                                    <div className="col-md-4">
                                        <h6 className="section-title text-start text-primary text-uppercase">Booking</h6>
                                        <p className='staff-text'><i className="fa fa-envelope-open text-primary me-2"></i>sunnyexecutives@gmail.com</p>
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="section-title text-start text-primary text-uppercase">General</h6>
                                        <p className='staff-text'><i className="fa fa-envelope-open text-primary me-2"></i>sunnyexecutives@gmail.com</p>
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="section-title text-start text-primary text-uppercase">Technical</h6>
                                        <p className='staff-text'><i className="fa fa-envelope-open text-primary me-2 "></i>sunnyexecutives@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                                
                                <a target="_blank" href='https://www.google.com/maps/dir//Sunny+family+restaurant+and+bar,+SH.55,+Chakan+Shikrapur+Rd,+near+Aditya+petrol+Corp+(IOCL,+Shikrapur,+Maharashtra+412208/@18.6968706,74.1012745,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2d1c921e28255:0x8de7835f660ba2b0!2m2!1d74.1021328!2d18.6983188?entry=ttu'>
                                    <img className='map-img' alt='map-img' src='/img/map.png'></img>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.2s">
                                    <Enquire />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-dark text-light footer wow fadeIn footer-c margin-map footer-mt" data-wow-delay="0.1s">
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
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 9022366065 | 09730000807</p>
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
                                        <a className="btn btn-link" href="#services">Food & Restaurant</a>
                                        <a className="btn btn-link" href="#services">Event & Party</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
            </div>

        </>
    )
}

export default contact