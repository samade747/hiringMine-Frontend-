import { useEffect, useRef, useState } from 'react';
import './verifyEmail.css';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { serverUrl } from '../../utils/appConstant';
import { useNavigate } from 'react-router-dom';



const VerifyEmail = ({ length = 6 }) => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the first input field when the component mounts
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
 
  const handleChange = (e, index) => {
    const { value } = e.target;
     if(value.match(/^[a-zA-Z0-9]$/)){
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field if it exists
      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
     }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      // Move focus to the previous input field if it exists
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };
  console.log("otp", otp); 

  const verifyButtonHandler =async () =>{
    const token = localStorage.getItem("dummyToken");
    console.log(token);
    try{
      const otpValues = otp.join("")
      console.log("otp",otpValues);
      if(!otpValues){
        toast.warn("Please enter the OTP before proceeding.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else{
    const res = await axios.post(`${serverUrl}/api/auth/verifyEmail`,{
      otp: otpValues
    },{
      headers: {
        'Authorization': `Bearer ${token}`
    }
    })
    console.log(res);
    if(res.data.status){
      toast.success(res.data.message, {
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
    }else{
      toast.error(res.data.message, {
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
  }catch(error){
    let message = error?.response?.data.message
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

  const requestOtpHandler = async ()=>{
    const token = localStorage.getItem("dummyToken");
    console.log(token);
    const res = await axios.put(`${serverUrl}/api/auth/user`,null,{
      headers: {
        'Authorization': `Bearer ${token}`
    }
    })
    console.log("res",res);
    if(res.data.status){
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    }else{
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
    <div className="verify">
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
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
      <Container className='verifyContainer'>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={10} sm={6} md={6} lg={6} className='childGrid'>
            <div className="inputContainer">
              <h4>Verify</h4>
              <p>Your code was sent to you via email</p>
              <form className="otpInputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    maxLength="1"
                  />
                ))}
              </form>
              <button className='verifyBtn' onClick={verifyButtonHandler}>Verify</button>
              <p>Don't receive code? <span className='requestOtp' onClick={requestOtpHandler}>Request again</span></p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default VerifyEmail