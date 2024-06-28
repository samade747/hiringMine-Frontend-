import { Box, Container, Grid } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './forgetpassword.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { serverUrl } from '../../utils/appConstant';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #7b7979',
    borderRadius: "4px",
    boxShadow: 24,
    p: 4,
  };

const ForgetPassword = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [emailVal, setEmailVal] = useState("");
    const forgetPasswordHandler = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`${serverUrl}/api/auth/forgotPassword`, {
                email: emailVal
            })
            if(res.data.status){
                handleOpen()
                localStorage.setItem("dummyToken", res.data.token);
            }
            // // res && notify()
            // toast.success('Login Successful!', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            // });
           
        } catch (error) {
            let message = error?.response?.data.message
            console.log(message);
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
  return (
    <div>
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
            <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Email Verification Request
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          We have sent a verification request to <span className='userEmail'>{emailVal}</span>. Please check your email and click on the link to verify.
          </Typography>
        </Box>
      </Modal>
    </div>
    <Container className='loginContainer'>
    <Box>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={"20px"}>
            <Grid item xs={12} sm={12} md={12} lg={12} order={{ xs: 4, sm: 4, md: 4 }} className="forgetGrid">
                <div className='forgetPassword'>
                    <h4 className='forgetTitle'>FORGET PASSWORD</h4>
                    <form className="inputWrappers">
                        <div className="inputChilds">
                            <input type="email" name="email" placeholder='Enter Email Address' className='email' id="" onChange={(e) => setEmailVal((e.currentTarget.value))} />
                        </div>
                        <button className="signupButton" onClick={forgetPasswordHandler}>Forget Password</button>
                    </form>
                    <div style={{textAlign:"end",margin:"10px 0"}}>
                        <Link to="/login" style={{textDecoration:"none",color:"grey"}}>
                        Go to
                        <span style={{color:"rgb(104, 81, 255)"}} className='loginLinkInForgetPassword'> Login?</span>
                          
                        </Link>
                    </div>

                </div>
            </Grid>

        </Grid>
        
    </Box>
</Container>
</div>
  )
}

export default ForgetPassword