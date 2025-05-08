import { useState } from 'react'
import './index.css'
import Header from './header'
import RankingSelector from './Ranking_select'
import pic from './img/busan.jpg'
import { HiOutlineHome } from "react-icons/hi2";
import { IoTrophyOutline } from "react-icons/io5";
import { GoDeviceCameraVideo } from "react-icons/go";
import { PiCameraPlus } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='all'>
            <Header/>
            <RankingSelector/>
            <main>
              <div className='rankings'>
                <h2>1</h2>
                <img src={pic} alt='picture_busan' height='55px' width='55px' /> 
                <div className='city_info'>
                  <div className='city'>부산광역시</div>
                  <div className='count'>조회수 2억 6천만회</div>
                </div>
                <div className='heart_info'>
                  <FaHeart className='heart' />
                  <div className='heart_num'>12.3K</div>
                </div>
              </div>
              <div className='rankings'>
                <h2>2</h2>
                <img src={pic} alt='picture_busan' height='55px' width='55px' /> 
                <div className='city_info'>
                  <div className='city'>부산광역시</div>
                  <div className='count'>조회수 2억 6천만회</div>
                </div>
                <div className='heart_info'>
                  <FaHeart className='heart' />
                  <div className='heart_num'>12.3K</div>
                </div>
              </div>
              <div className='rankings'>
                <h2>3</h2>
                <img src={pic} alt='picture_busan' height='55px' width='55px' /> 
                <div className='city_info'>
                  <div className='city'>부산광역시</div>
                  <div className='count'>조회수 2억 6천만회</div>
                </div>
                <div className='heart_info'>
                  <FaHeart className='heart' />
                  <div className='heart_num'>12.3K</div>
                </div>
              </div>
              <div className='rankings'>
                <h2>4</h2>
                <img src={pic} alt='picture_busan' height='55px' width='55px' /> 
                <div className='city_info'>
                  <div className='city'>부산광역시</div>
                  <div className='count'>조회수 2억 6천만회</div>
                </div>
                <div className='heart_info'>
                  <FaHeart className='heart' />
                  <div className='heart_num'>12.3K</div>
                </div>
              </div>
              <div className='rankings'>
                <h2>5</h2>
                <img src={pic} alt='picture_busan' height='55px' width='55px' /> 
                <div className='city_info'>
                  <div className='city'>부산광역시</div>
                  <div className='count'>조회수 2억 6천만회</div>
                </div>
                <div className='heart_info'>
                  <FaHeart className='heart' />
                  <div className='heart_num'>12.3K</div>
                </div>
              </div>
              <div className='rankings'>
                <h2>6</h2>
                <img src={pic} alt='picture_busan' height='55px' width='55px' /> 
                <div className='city_info'>
                  <div className='city'>부산광역시</div>
                  <div className='count'>조회수 2억 6천만회</div>
                </div>
                <div className='heart_info'>
                  <FaHeart className='heart' />
                  <div className='heart_num'>12.3K</div>
                </div>
              </div>
              <div className='rankings'>
                <h2>7</h2>
                <img src={pic} alt='picture_busan' height='55px' width='55px' /> 
                <div className='city_info'>
                  <div className='city'>부산광역시</div>
                  <div className='count'>조회수 2억 6천만회</div>
                </div>
                <div className='heart_info'>
                  <FaHeart className='heart' />
                  <div className='heart_num'>12.3K</div>
                </div>
              </div>
            </main>
            <nav>
              <div className='nav'><HiOutlineHome className='icon'/>홈</div> 
              <div className='nav'><IoTrophyOutline className='icon' />랭킹</div>
              <div className='nav'><GoDeviceCameraVideo className='icon' />숏폼</div>
              <div className='nav'><PiCameraPlus className='icon' />업로드</div>
            </nav>
        </div>
    </>
  )
}

export default App