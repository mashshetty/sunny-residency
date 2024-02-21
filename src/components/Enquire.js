import React from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

function Enquire() {
    return (
        <div className='contact-holder'>
            <CloseIcon className='close-icon' />
            <h2 className='enquire'> <span className='enquire-text'> Enquire </span> <span className='staff-text'>with US </span> </h2>
            <p>
                <a href="https://wa.me/7022318883"> <span className='call-us'><WhatsAppIcon fontSize='medium' className='contact-icons whatsapp' /> Chat Now </span>  </a>
            </p>
            <p><a href="tel:+91 7022318883"> <span className='call-us'><AddIcCallIcon fontSize='medium' className='contact-icons call' /> Call Us </span></a></p>

            <p>
                <a href="mailto:sunnyexecutives@gmail.com"> <span className='call-us'><EmailIcon fontSize='medium' className='contact-icons email' /> Email Us</span> </a>
            </p>
        </div>

    )
}

export default Enquire