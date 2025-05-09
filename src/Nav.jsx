import { useState } from "react" 
import { HiOutlineHome } from "react-icons/hi2";
import { IoTrophyOutline } from "react-icons/io5";
import { GoDeviceCameraVideo } from "react-icons/go";
import { PiCameraPlus } from "react-icons/pi";

function Nav(props) {

  return (
    <>
        <nav>
            <div className='nav'><HiOutlineHome className='icon'/>홈</div> 
            <div className='nav'><IoTrophyOutline className='icon' />랭킹</div>
            <div className='nav'><GoDeviceCameraVideo className='icon' />숏폼</div>
            <div className='nav'><PiCameraPlus className='icon' />업로드</div>
        </nav>
    </>
)
}
export default Nav