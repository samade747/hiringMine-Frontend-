import { Box, Container, Grid } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../../utils/appConstant';

const Login = () => {
    const [emailVal, setEmailVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const navigate = useNavigate();

    const loginHandler =async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${serverUrl}/api/auth/login`, {
                email: emailVal,
                password: passwordVal,
            })
            console.log(res);
            localStorage.setItem("dummyToken", res.data.token);
            // res && notify()
            toast.success('Login Successful!', {
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
                navigate("/users")
            },1000)
           
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
        <div className="loginParent">
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
                            <h4 className='loginTitle'>WELCOME BACK</h4>
                            <p>Login to access your personalized job recommendations and apply to jobs quickly!</p>
                            <form className="inputWrappers">
                                <div className="inputChilds">
                                    <input type="email" name="email" placeholder='Enter Email Address' className='email' id="" onChange={(e) => setEmailVal((e.currentTarget.value))} />
                                </div>
                                <div className="inputChilds">
                                    <input type="password" name="password" placeholder='Password' className='password' id="" onChange={(e) => setPasswordVal(e.currentTarget.value)} />
                                </div>
                                <Link to="/forget_password" className='forgetPassword'><span>Forgotten Password</span></Link>
                                <button className="signupButton" onClick={loginHandler}>Login</button>
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

export default Login