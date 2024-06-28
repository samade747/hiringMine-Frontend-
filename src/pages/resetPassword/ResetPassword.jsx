import { Box, Container, Grid } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";

import './resetpassword.css';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { serverUrl } from '../../utils/appConstant';

const ResetPassword = () => {
    const navigate = useNavigate()
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const {id, token} = useParams()

    const resetPasswordHandler = async (e) => {
        e.preventDefault()
        try {
            console.log("running");
            console.log("new",newPassword);
            console.log("confirmnew",confirmNewPassword);

            const res = await axios.put(`${serverUrl}/api/auth/resetPassword`, {
                newPassword,
                confirmNewPassword,
                token
            })
            const msg =res.data.message;
           if(res.data.status){
               toast.success(msg, {
                   position: "top-right",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "light",
               });
               setTimeout(()=>{
                navigate("/login")
               },2000)
           }
            // console.log(res);
            // localStorage.setItem("dummyToken", res.data.token);
            // // res && notify()

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
            <Container className='loginContainer'>
                <Box>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={"20px"}>
                        <Grid item xs={12} sm={12} md={12} lg={12} order={{ xs: 4, sm: 4, md: 4 }} className="loginGrid">
                            <div className='login'>
                                <h4 className='loginTitle'>RESET PASSWORD</h4>
                                <form className="inputWrappers">
                                    <div className="inputChilds">
                                        <input type="password" name="password" placeholder='New Password' className='password' id="" onChange={(e) => setNewPassword(e.currentTarget.value)} />
                                    </div>
                                    <div className="inputChilds">
                                        <input type="password" name="cPassword" placeholder='Confrim new Password' id="" className='cPassword' onChange={(e) => setConfirmNewPassword(e.currentTarget.value)} />
                                    </div>
                                    <button className="signupButton" onClick={resetPasswordHandler}>Forget Password</button>
                                </form>

                            </div>
                        </Grid>

                    </Grid>
                    <p className='haveAccount'>Don't have an account? <Link to="/signup" style={{ textDecoration: "none", color: "#6851FF" }}>Register Now</Link></p>
                </Box>
            </Container>
        </div>
    )
}

export default ResetPassword