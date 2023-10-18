import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height:'80%',
  bgcolor: '#fea116',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>{
     setOpen(false);
     props.handleOpenModel(false)
    }

  useEffect(()=>{
    setOpen(props.modelOpen);
  },[])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            <div className='contact-holder'>
                <CloseIcon className='close-icon' onClick={()=>handleClose()}/>

          <Typography id="modal-modal-title" variant="h6" component="h2">
                <h2 className='enquire'> <span className='enquire-text'> Enquire </span> with US </h2>
          </Typography>
          
          
          
          <p>
           <a href="https://wa.me/9741104490"> <span className='call-us'><WhatsAppIcon fontSize='medium' className='contact-icons whatsapp'/> Chat Now </span>  </a>
          </p>
          <p><a href="tel:+9741104490"> <span className='call-us'><AddIcCallIcon fontSize='medium' className='contact-icons call'/> Call Us </span></a></p>

          <p>
           <a href="mailto:someone@example.com"> <span className='call-us'><EmailIcon fontSize='medium' className='contact-icons email'/> Email Us</span> </a>
          </p>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}