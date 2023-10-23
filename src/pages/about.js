import React from 'react'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HouseIcon from '@mui/icons-material/House';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import BasicModal from '@/components/Modal';


function About() {
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
        <>
            <Head>
                <title> About Us - Sunny Executives</title>
            </Head>
            {modelOpen && <BasicModal handleOpenModel={handleOpenModel} modelOpen={true} />}
            <div>
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
                                        <h1 className="m-0 text-primary text-uppercase">Sunny Executives</h1>
                                    </a>
                                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                        <div className="navbar-nav mr-auto py-0">
                                            <a href="/" className="nav-item nav-link">Home</a>
                                            <a href="/about" className="nav-item nav-link active">About</a>
                                            <a href="/services" className="nav-item nav-link">Services</a>
                                            <a href="/menu" className="nav-item nav-link">Menu</a>
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
                                <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center text-uppercase">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6">
                                    <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
                                    <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Sunny Executives</span></h1>
                                    <p className="mb-4 staff-text">Sunny Executives is the top destination for the best bar and restaurant experience in Pune, providing a fantastic culinary journey. Our top-notch lodging solutions ensure that your stay is comfortable and memorable. Our location is centrally located in Pune. We offer exceptional dining, lodging, and hospitality services to all the guests at Sunny Executives.</p>
                                    <div className="row g-3 pb-4">
                                        <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="border rounded p-1">
                                                <div className="border rounded text-center p-4">
                                                    <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                                                    <h2 ref={refr} className="mb-1" data-toggle="counter-up"> {rooms} </h2>
                                                    <p className="mb-0 staff-text">Rooms</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="border rounded p-1">
                                                <div className="border rounded text-center p-4">
                                                    <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                                    <h2 className="mb-1" data-toggle="counter-up">{staffs}+</h2>
                                                    <p ref={refs} className="mb-0 staff-text">Staffs</p>
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
                                    <p className="btn btn-primary py-3 px-5 mt-2" onClick={() => handleOpenModel(true)}>Explore More</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row g-3">
                                        <div className="col-6 text-end">
                                            <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" />
                                        </div>
                                        <div className="col-6 text-start">
                                            <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" />
                                        </div>
                                        <div className="col-6 text-end">
                                            <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" />
                                        </div>
                                        <div className="col-6 text-start">
                                            <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="services">
                        <div className="container-xxl py-5">
                            <div className="container">
                                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                                    {/* <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6> */}
                                    <h1 className="mb-5">Explore Our Other Area Of <span className="text-primary text-uppercase"> Activity</span></h1>
                                </div>
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <a className="service-item rounded" href="https://gangahospitalityservices.com/services/">
                                            <div className="service-icon bg-transparent border rounded p-1">
                                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                    <RestaurantIcon className='fa fa-hotel fa-2x text-primary activity-icn' />
                                                </div>
                                            </div>
                                            <h5 className="mb-3">Industrial Catering</h5>
                                            <p className="text-body mb-0">For many industries, like corporate offices, manufacturers, etc., industrial catering is crucial.</p>
                                            <p className='arrow-container'> <ArrowForwardIcon className='arrow-icon'/> </p>


                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                        <a className="service-item rounded" href="https://gangahospitalityservices.com/services/">
                                            <div className="service-icon bg-transparent border rounded p-1">
                                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                    <HouseIcon className='fa fa-hotel fa-2x text-primary activity-icn' />
                                                </div>
                                            </div>
                                            <h5 className="mb-3">Management Of Guest House</h5>
                                            <p className="text-body mb-0">Our team of hospitality managers has years of expertise and is skilled in running guest homes.</p>
                                            <p className='arrow-container'> <ArrowForwardIcon className='arrow-icon'/> </p>

                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <a className="service-item rounded" href="https://gangahospitalityservices.com/services/">
                                            <div className="service-icon bg-transparent border rounded p-1">
                                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                    <CleaningServicesIcon className='fa fa-hotel fa-2x text-primary activity-icn' />
                                                </div>
                                            </div>
                                            <h5 className="mb-3">House Keeping Services</h5>
                                            <p className="text-body mb-0">For people or businesses to maintain clean spaces, we offer expert cleaning and maintenance services.</p>
                                            <p className='arrow-container'> <ArrowForwardIcon className='arrow-icon'/> </p>

                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <a className="service-item rounded" href="https://gangahospitalityservices.com/services/">
                                            <div className="service-icon bg-transparent border rounded p-1">
                                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                    <HouseIcon className='fa fa-hotel fa-2x text-primary activity-icn' />
                                                </div>
                                            </div>
                                            <h5 className="mb-3">VP & VIP Guest House</h5>
                                            <p className="text-body mb-0">When VIPs and vice presidents travel for business, we provide a premium lodging option.</p>
                                            <p className='arrow-container'> <ArrowForwardIcon className='arrow-icon'/> </p>

                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <a className="service-item rounded" href="https://gangahospitalityservices.com/services/">
                                            <div className="service-icon bg-transparent border rounded p-1">
                                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                    <DryCleaningIcon className='fa fa-hotel fa-2x text-primary activity-icn' />
                                                </div>
                                            </div>
                                            <h5 className="mb-3">Laundry Service</h5>
                                            <p className="text-body mb-0">We refers to a skilled service that handles washing, drying, and other textile-related tasks on behalf of clients.</p>
                                            <p className='arrow-container'> <ArrowForwardIcon className='arrow-icon'/> </p>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <a className="service-item rounded" href="https://gangahospitalityservices.com/services/">
                                            <div className="service-icon bg-transparent border rounded p-1">
                                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                    <DeliveryDiningIcon className='fa fa-hotel fa-2x text-primary activity-icn' />
                                                </div>
                                            </div>
                                            <h5 className="mb-3">Food Material Supply</h5>
                                            <p className="text-body mb-0">Food materials, which might include fruits, vegetables, grains, and more, are the items required to prepare and cook food.</p>
                                            <p className='arrow-container'> <ArrowForwardIcon className='arrow-icon'/> </p>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <a className="service-item rounded" href="https://gangahospitalityservices.com/services/">
                                            <div className="service-icon bg-transparent border rounded p-1">
                                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                    <ManageAccountsIcon className='fa fa-hotel fa-2x text-primary activity-icn' />
                                                </div>
                                            </div>
                                            <h5 className="mb-3">Man Power Supply</h5>
                                            <p className="text-body mb-0">By providing labor or human resources, Ganga Hospitality Service helps businesses meet their staffing demands.</p>
                                            <p className='arrow-container'> <ArrowForwardIcon className='arrow-icon'/> </p>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <a className="service-item rounded" href="https://gangahospitalityservices.com/services/">
                                            <div className="service-icon bg-transparent border rounded p-1">
                                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                                    <AddBusinessIcon className='fa fa-hotel fa-2x text-primary activity-icn' />
                                                </div>
                                            </div>
                                            <h5 className="mb-3">Management Of Hotels</h5>
                                            <p className="text-body mb-0">Effective departmental collaboration and a dedication to delivering first-rate customer service are essential for successful hotel management.</p>
                                            <p className='arrow-container'> <ArrowForwardIcon className='arrow-icon'/> </p>
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
                                <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="rounded shadow overflow-hidden">
                                        <div className="position-relative">
                                            <img className="img-fluid" src="img/team-1.jpg" alt="" />
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
                                            <img className="img-fluid" src="img/team-2.jpg" alt="" />
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
                                            <img className="img-fluid" src="img/team-3.jpg" alt="" />
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
                                            <img className="img-fluid" src="img/team-1.jpg" alt="" />
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
                                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="rounded shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/team-4.jpg" alt="" />
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
                                            <a className="btn btn-link" href="">Privacy Policy</a>
                                            <a className="btn btn-link" href="">Terms & Condition</a>
                                            <a className="btn btn-link" href="">Support</a>
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
                    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
                </div>
            </div>
        </>
    )

}

export default About