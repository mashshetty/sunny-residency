import React from 'react'
import Head from 'next/head'

function Services() {
    return (
        <>


            <div className="container-xxl bg-white p-0">

                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

                <div className="container-fluid bg-dark px-0">
                    <div className="row gx-0">
                        <div className="col-lg-3 bg-dark d-none d-lg-block">
                            <a href="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <h1 className="m-0 text-primary text-uppercase">Sunny</h1>
                            </a>
                        </div>
                        <div className="col-lg-9">
                            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                <a href="/" className="navbar-brand d-block d-lg-none">
                                    <h1 className="m-0 text-primary text-uppercase">Sunny</h1>
                                </a>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div className="navbar-nav mr-auto py-0">
                                        <a href="/" className="nav-item nav-link">Home</a>
                                        <a href="/about" className="nav-item nav-link">About</a>
                                        <a href="/services" className="nav-item nav-link active">Services</a>
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
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div >
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-3">
                                    <div className="date" id="date1" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input"
                                            placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="date" id="date2" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select">
                                        <option selected>Adult</option>
                                        <option value="1">Adult 1</option>
                                        <option value="2">Adult 2</option>
                                        <option value="3">Adult 3</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select">
                                        <option selected>Child</option>
                                        <option value="1">Child 1</option>
                                        <option value="2">Child 2</option>
                                        <option value="3">Child 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary w-100">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
                            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a className="service-item rounded" href="/#rooms">
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-hotel fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Rooms</h5>
                                    <p className="text-body mb-0">At Sunny Residency, we take pride in providing the finest rooms, ensuring that your stay is nothing short of exceptional</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                <a className="service-item rounded" href="">
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-utensils fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Food & Restaurant</h5>
                                    <p className="text-body mb-0">Sunny Residency boasts the best dining experience with a delectable menu and a top-rated restaurant, ensuring that you savor every moment of your stay with us.</p>
                                </a>
                            </div>

                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <a className="service-item rounded" href="">
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-glass-cheers fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Event & Party</h5>
                                    <p className="text-body mb-0">At Sunny Residency, we excel at creating unforgettable events and parties, offering the perfect venue and services to make your celebrations truly exceptional.</p>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-xxl testimonial mt-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s" >
                    <div className="container">
                        <div className="owl-carousel testimonial-carousel py-5">
                            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                            </div>
                            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                            </div>
                            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
                    <div className="container pb-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-4">
                                <div className="bg-primary rounded p-4">
                                    <a href="/"><h1 className="text-white text-uppercase mb-3">Sunny Residency</h1></a>
                                    <p className="text-white mb-0">
                                        Pune's lodging services meet diverse needs in the 'Oxford of the East'.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Shikrapur SH.55, Chakan Shikrapur Road, Near Aditya petrol Corp (IOCL, Shikrapur, Maharashtra)</p>
                                <p className='view-in-map'> <i className="fa fa-map-marker-alt me-3"></i> <a target="_blank" href='https://www.google.com/maps/dir//Sunny+family+restaurant+and+bar,+SH.55,+Chakan+Shikrapur+Rd,+near+Aditya+petrol+Corp+(IOCL,+Shikrapur,+Maharashtra+412208/@18.6968706,74.1012745,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2d1c921e28255:0x8de7835f660ba2b0!2m2!1d74.1021328!2d18.6983188?entry=ttu'>view in map</a> </p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 9022366065</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"></i>sunnyresidency@gmail.com</p>
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
                                        <a className="btn btn-link" href="">Privacy Policy</a>
                                        <a className="btn btn-link" href="">Terms & Condition</a>
                                        <a className="btn btn-link" href="">Support</a>
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
                    {/* <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    All Right Reserved.

                                    Developed By Vithesh Shetty
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <a href="">Home</a>
                                        <a href="">Cookies</a>
                                        <a href="">Help</a>
                                        <a href="">FQAs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>


                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

            </div>

        </>
    )
}

export default Services