import { useState } from "react" 
import pic from './img/busan.jpg'
import { FaHeart } from "react-icons/fa";

function Content(props) {

  return (
    <>
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
    </>
)
}
export default Content