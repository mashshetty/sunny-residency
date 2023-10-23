import React, { useEffect, useState } from 'react'

function gallery() {
  return (
    <>
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
                <h1 className="m-0 text-primary text-uppercase">Sunny Bar and Restaurant</h1>
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
                  <a href="/gallery" className="nav-item nav-link active">Gallery</a>
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
            <h1 className="display-3 text-white mb-3 animated slideInDown">Gallery</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Gallery</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="mb-5">Glance At Our  <span className="text-primary text-uppercase"> Gallery</span></h1>
      </div>
      <div className='gallery-p' >
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/carousel-1.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/room-1.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/room-2.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/carousel-2.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/carousel-1.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/room-1.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/nveg1.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/nveg2.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/carousel-1.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/carousel-2.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/room-1.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/room-2.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/nveg1.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/carousel-1.jpg" alt="" />
        </div>
        <div className="gcc wow fadeInUp" data-wow-delay="0.1s">
          <img className='galimg' src="/img/carousel-2.jpg" alt="" />
        </div>


      </div>










      <div className="container-fluid bg-dark text-light footer wow fadeIn footer-c footer-mt" data-wow-delay="0.1s">
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="bg-primary rounded p-4">
                <a href="/"><h1 className="text-white text-uppercase mb-3">Sunny Executives</h1></a>
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



    </>
  )
}

export default gallery