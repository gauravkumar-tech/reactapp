import './App.css';
import ButtonAppBar from './ButtonAppBar';
import Footer from './Footer';
import SvgIcon from '@mui/material/SvgIcon';
import { useState } from 'react';
import { Confrence } from './components/Confrence';
import { Booking } from './components/Booking';

function App() {

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1-2.17 0-6.5 1.08-6.5 3.25v2.75h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0h-7.5v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zm-14-5.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      </SvgIcon>
    );
  }


  const [template, settemplate] = useState("");

  const confrenceRoomLoad = (text) =>{
    
    settemplate(text);


  }


  return (
    <>
      <ButtonAppBar/>
      <div className="gaurav">
        {/* this is side menu static hard coded */}
        <div className="screenthreezero">
          <div className="singleIcon" onClick={()=>{confrenceRoomLoad('Confrence Room')}}>
            <div className="margintop"><HomeIcon /></div>
            <div className="confstyle">Confrence Room</div>
           </div>

           <div className="singleIcon" onClick={()=>{confrenceRoomLoad('Booking Room')}}>
            <div className="margintop"><HomeIcon /></div>
            <div className="confstyle">Booking Room</div>
           </div>
        </div>


        {/* this is side div -- main item wali chiz */}
        <div className="screensevenzero">
          <div className="confrenceRoom">
            {template !== 'Booking Room' ? <Confrence/> : <Booking/>}
            </div>
        </div>
      </div>
      <Footer />
      
    </>
  );
}

export default App;
