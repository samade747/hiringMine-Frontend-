import { Box, Container, Modal, Typography } from '@mui/material'
import './profile.css';
import LOgo from "../../assets/HMLogo.png";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LOGO from "../../assets/HMLogo.png";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const style2 = {
  position: 'absolute',
  left: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '50%', // Adjust the width as needed
  maxWidth: '300px', // Set a max-width if necessary
  height: "100%",
  maxHeight: '100vh', // Set a max-height if necessary
  overflow: 'auto', // Add overflow if content exceeds the height
  bgcolor: 'background.paper', // Use theme colors for background
  boxShadow: 24,
  p: 4,
};
const Profile = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const logOutHandler = () => {
    console.log("Running");
    toast.success('LogOut Successful!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    localStorage.removeItem("dummyToken");
    setTimeout(()=>{
      setOpen(false)  
    },1000)
  }

  useEffect(() => {
    function isUser() {
      let dummyToken = localStorage.getItem("dummyToken");
      if (!dummyToken) {
        navigate("/login")
      }
    }
    isUser()


  }, [open])
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ border: "none", outline: "none" }}


      >
        <Box sx={style2} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img className="profileLogo" src={LOGO} alt="" />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='logoutParent' onClick={logOutHandler}>
              <LogoutOutlinedIcon />
              LogOut
            </div>

          </Typography>
        </Box>
      </Modal>
      <div className='profilePar'>
        <Container className='profile'>
          <Box>
            <div className="headerProfile">
              <div className="logoProfile">
                <img src={LOgo} alt="" />
              </div>
              <div className="itemsProfile">
                <input type="text" />
                <button>Search</button>
              </div>
              <div className="logoutProfile">
                <MenuOutlinedIcon fontSize='large' onClick={handleOpen} />
              </div>
            </div>
          </Box>
        </Container>
      </div>
      <Container>
        <Box>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h1>Welcome to an Under Constructed Land </h1>
          </div>
        </Box>
      </Container>
    </>
  )
}

export default Profile