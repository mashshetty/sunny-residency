import React from 'react'
import BasicModal from './components/Modal'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
function App() {
    const [modelOpen, setModelOpen] = useState(false);
    const [clients, setClients] = useState(0);
    const [staffs, setStaffs] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [ref, inView] = useInView();
    const [refs, inViews] = useInView();
    const [refr, inViewr] = useInView();
  
    useEffect(() => {
      if (inView) {
        const interval = setInterval(() => {
          if (clients < 1150) {
            setClients(clients + 1);
          } else {
            clearInterval(interval);
          }
        }, 5); // Adjust the interval for the desired animation speed
        return () => clearInterval(interval);
      }
    }, [clients, inView]);

    useEffect(() => {
        if (inViews) {
          const interval = setInterval(() => {
            if (staffs < 50) {
              setStaffs(staffs + 1);
            } else {
              clearInterval(interval);
            }
          }, 60); // Adjust the interval for the desired animation speed
          return () => clearInterval(interval);
        }
      }, [staffs, inViews]);

      useEffect(() => {
        if (inViewr) {
          const interval = setInterval(() => {
            if (rooms < 8) {
              setRooms(rooms + 1);
            } else {
              clearInterval(interval);
            }
          }, 40); // Adjust the interval for the desired animation speed
          return () => clearInterval(interval);
        }
      }, [rooms, inViewr]);

    const handleOpenModel = (flag) => {
        setModelOpen(flag)
    }


    return (
        <div>
            {modelOpen && <BasicModal handleOpenModel={handleOpenModel} modelOpen={true} />}


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
                                        <a href="/" className="nav-item nav-link active">Home</a>
                                        <a href="/about" className="nav-item nav-link">About</a>
                                        <a href="/services" className="nav-item nav-link">Services</a>
                                        <a href="/menu" className="nav-item nav-link">Menu</a>
                                        <a href="/gallery" className="nav-item nav-link">Gallery</a>
                                        {/* <a href="/gallery" className="nav-item nav-link">Gallery</a> */}
                                        <a href="#rooms" className="nav-item nav-link">Rooms</a>
                                        <a href="/contact" className="nav-item nav-link">Contact</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container-fluid p-0 mb-5">
                    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100 cimg" src="img/h3.jpg" alt="Sunny Executive carousel image1" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" >
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                        <h1 className="display-3 text-white mb-4 animated slideInDown"> Sunny Executives </h1>
                                        <a href="#rooms" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                                        <span onClick={() => handleOpenModel(true)} className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</span>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="w-100 cimg" src="img/h2.jpg" alt="Sunny Executive carousel image2" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" >
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                        <h1 className="display-3 text-white mb-4 animated slideInDown">Sunny Executives</h1>
                                        <a href="#rooms" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                                        <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
               
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
                                <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Sunny Executives</span></h1>
                                <p className="mb-4 " id="welcome-text">Sunny Executives is the top destination for the best bar and restaurant experience in Pune, providing a fantastic culinary journey. Our top-notch lodging solutions ensure that your stay is comfortable and memorable. Our location is centrally located in Pune. We offer exceptional dining, lodging, and hospitality services to all the guests at Sunny Executives.</p>
                                <div className="row g-3 pb-4">
                                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="border rounded p-1">
                                            <div className="border rounded text-center p-4">
                                                <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                                                <h2 ref={refr}  className="mb-1" data-toggle="counter-up"> {rooms} </h2>
                                                <p className="mb-0 staff-text">Rooms</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="border rounded p-1">
                                            <div className="border rounded text-center p-4">
                                                <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                                <h2 ref={refs}  className="mb-1" data-toggle="counter-up"> {staffs}+</h2>
                                                <p className="mb-0 staff-text">Staffs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="border rounded p-1">
                                            <div className="border rounded text-center p-4">
                                                <i className="fa fa-users fa-2x text-primary mb-2"></i>
                                                <h2 ref={ref} className="mb-1" data-toggle="counter-up">{clients}+</h2>
                                                <p className="mb-0 staff-text">Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5 mt-2" href="#services">Explore More</a>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/h3.jpg" />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/h4.jpg" />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/h1.jpg" />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/h2.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="rooms">
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                                <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
                                <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="room-item shadow rounded overflow-hidden">
                                        <div className="position-relative">
                                            <img className="img-fluid" src="img/room-1.jpg" alt="" />
                                            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">1800/Night</small>
                                        </div>
                                        <div className="p-4 mt-2">
                                            <div className="d-flex justify-content-between mb-3">
                                                <h5 className="mb-0">AC Rooms</h5>
                                                <div className="ps-2">
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                </div>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <small className="border-end me-3 pe-3 staff-text"><i className="fa fa-bed text-primary me-2"></i>Double Bed</small>
                                                <small className="border-end me-3 pe-3 staff-text"><i className="fa fa-bath text-primary me-2"></i>1 Bath</small>
                                                <small className='staff-text'><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                            </div>
                                            <p className="text-body mb-3">Sunny Executives offers top-notch air-conditioned rooms for a comfortable and refreshing stay, making it the best choice for a relaxing and enjoyable experience.</p>
                                            <div className="d-flex justify-content-between">
                                                <span onClick={() => { handleOpenModel(true) }} className="btn btn-sm btn-dark rounded py-2 px-4">Book Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="room-item shadow rounded overflow-hidden">
                                        <div className="position-relative">
                                            <img className="img-fluid" src="img/room-2.jpg" alt="" />
                                            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">1800/Night</small>
                                        </div>
                                        <div className="p-4 mt-2">
                                            <div className="d-flex justify-content-between mb-3">
                                                <h5 className="mb-0">Non AC Rooms</h5>
                                                <div className="ps-2">
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                </div>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <small className="border-end me-3 pe-3 staff-text"><i className="fa fa-bed text-primary me-2"></i>Double Bed</small>
                                                <small className="border-end me-3 pe-3 staff-text"><i className="fa fa-bath text-primary me-2"></i>1 Bath</small>
                                                <small className='staff-text'><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                            </div>
                                            <p className="text-body mb-3">Sunny Executives provides cozy and affordable non-AC rooms, offering a budget-friendly option while maintaining comfort and convenience, making it a top choice for cost-conscious travelers.</p>
                                            <div className="d-flex justify-content-between">
                                                <span onClick={() => { handleOpenModel(true) }} className="btn btn-sm btn-dark rounded py-2 px-4">Book Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-md-6 bg-dark d-flex align-items-center">
                            <div className="p-5">
                                <h6 className="section-title text-start text-white text-uppercase mb-3">Luxury Living</h6>
                                <h1 className="text-white mb-4">Discover A Brand Luxurious Restaurant Sunny Executives</h1>
                                <p className="text-white mb-4">Lodging and residency services in Pune offer a range of accommodation solutions for all guests who stays in one of India's most vibrant and culturally rich cities. Pune, known as the "Oxford of the East" and the "Cultural Capital of Maharashtra," attracts students, professionals, and tourists from across the country and the world</p>
                                <a href="#rooms" className="btn btn-primary py-md-3 px-md-5 me-3">Our Rooms</a>
                                <span onClick={() => { handleOpenModel(true) }} className="btn btn-light py-md-3 px-md-5">Book A Room</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className='img1' src='/img/h1.jpg' alt="Sunny Executive image3"></img>
                        </div>

                    </div>
                </div>

                <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always"
                                        allow="autoplay"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="services">
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                                <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
                                <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <a className="service-item rounded" href="">
                                        <div className="service-icon bg-transparent border rounded p-1">
                                            <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                <i className="fa fa-hotel fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <h5 className="mb-3">Rooms</h5>
                                        <p className="text-body mb-0">At Sunny Executives, we take pride in providing the finest rooms, ensuring that your stay is nothing short of exceptional</p>
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
                                        <p className="text-body mb-0">Sunny Executives boasts the best dining experience with a delectable menu and a top-rated restaurant, ensuring that you savor every moment of your stay with us.</p>
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
                                        <p className="text-body mb-0">At Sunny Executives, we excel at creating unforgettable events and parties, offering the perfect venue and services to make your celebrations truly exceptional.</p>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-xxl py-5 staff-c">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
                            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Partners</span></h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="rounded shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/unknown.jpg" alt="" />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Chandras Shetty</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="rounded shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/unknown.jpg" alt="" />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Bhaskar Shetty</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="rounded shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/unknown.jpg" alt="" />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Yogish Poojary</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="rounded shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/unknown.jpg" alt="" />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Sunil Dnyndeo Theurakar</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="rounded shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/unknown.jpg" alt="" />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Sagar Shetty</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-dark text-light footer wow fadeIn footer-c" data-wow-delay="0.1s">
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
                                        {/* <a className="btn btn-link" href="">Privacy Policy</a> */}
                                        {/* <a className="btn btn-link" href="">Terms & Condition</a> */}
                                        {/* <a className="btn btn-link" href="">Support</a> */}
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

        </div>
    )
}

export default App