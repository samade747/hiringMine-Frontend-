import { Box, Container, Grid } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"
import './signup.css';
import axios from 'axios';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { serverUrl } from '../../utils/appConstant';


function Signup() {
    const [firstNameVal, setFirstNameVal] = useState("");
    const [lastNameVal, setLastNameVal] = useState("");
    const [emailVal, setEmailVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [cPasswordVal, setcPasswordVal] = useState("");
    const navigate = useNavigate()


    const notify = () => {
        return toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "red",
            transition: Bounce,
        });
    }

    const signupHandler = async (e) => {
        e.preventDefault()
        // console.log(firstNameVal, lastNameVal, emailVal, passwordVal, cPasswordVal);
        try {
            const res = await axios.post(`${serverUrl}/api/auth/signup`, {
                firstName: firstNameVal,
                lastName: lastNameVal,
                email: emailVal,
                password: passwordVal,
                cPassword: cPasswordVal,
            })
            console.log(res);
            localStorage.setItem("dummyToken", res.data.token);
            // res && notify()
            toast.success('Signup Successful!', {
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
                navigate("/verifyEmail")
            },2000)
            //Hello
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
        <div className='signupParent'>
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
            <Container className='signupContainer'>
                <Box>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={"20px"}>
                        <Grid item xs={12} sm={12} md={12} lg={12} order={{ xs: 4, sm: 4, md: 4 }} className="signUpGrid">
                            <div className='signup'>
                                <h4 className='signUpTitle'>LET’S GET STARTED</h4>
                                <p>Create an account to get recommended jobs that match your resume and apply to multiple jobs in seconds!</p>
                                <form className="inputWrappers">
                                    <div className="inputChilds">
                                        <input type="text" name="firstName" placeholder='First Name' className='firstName' id="" onChange={(e) => setFirstNameVal(e.currentTarget.value)} />
                                    </div>
                                    <div className="inputChilds">
                                        <input type="text" name="lastName" placeholder='Last Name' className='lastName' id="" onChange={(e) => setLastNameVal(e.currentTarget.value)} />
                                    </div>
                                    <div className="inputChilds">
                                        <input type="email" name="email" placeholder='Enter Email Address' className='email' id="" onChange={(e) => setEmailVal((e.currentTarget.value))} />
                                    </div>
                                    <div className="inputChilds">
                                        <input type="password" name="password" placeholder='Password' className='password' id="" onChange={(e) => setPasswordVal(e.currentTarget.value)} />
                                    </div>
                                    <div className="inputChilds">
                                        <input type="password" name="cPassword" placeholder='Confrim Password' id="" className='cPassword' onChange={(e) => setcPasswordVal(e.currentTarget.value)} />
                                    </div>
                                    <p>By clicking Agree & Join, you agree to the Hiring Mine User Agreement, Privacy Policy, and Cookie Policy.</p>
                                    <button className="signupButton" onClick={signupHandler}>Agree & Join</button>
                                </form>

                            </div>
                        </Grid>

                    </Grid>
                    <p className='haveAccount'>Already on Hiring Mine? <Link to="/login" style={{ textDecoration: "none", color: "#6851FF" }}>Login</Link></p>
                </Box>
            </Container>
        </div>
    )
}

export default Signup;