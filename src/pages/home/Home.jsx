import  Header  from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import'./home.css';
import BG_IMG from  "../../assets/hiringMineBg.png"
import GetJobs from '../../components/getJobs/GetJobs';
import DreamJobs from '../../components/dreamJobs/DreamJobs';
import LatestJobs from '../../components/latestJobs/LatestJobs';
import Layer from '../../layer/Layer';
import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Hello from '../../components/hello/Hello';

function Home() {
  const isTheme = localStorage.getItem("theme");
  const {bgTheme} = useSelector(state=>state.bgTheme)
  console.log("isTheme",bgTheme);
  return (
    <>
    <div className={bgTheme ? "home1":"home2"}>
        <Hello/>
        <div style={{padding: "0 10px"}}>
        <Header/>
        <div className='bgImage' >
          <img className='img' src={BG_IMG} alt="" />
        </div>
        <GetJobs/>
        <DreamJobs/>
        <LatestJobs/>
        <Layer/>
        </div>
        <div className='footerParentDev'>
        <Footer/>
        </div>
    </div>
    </>
  )
}

export default Home