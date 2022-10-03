import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import './infor.css';
import GoogleMapComponent from '../../components/GoogleMap/GoogleMap';

const InforItem = () => {
    const [itemcall, setitemcall] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const paramss = useParams();

    const callApi =async()=>{
        setIsLoading(true);
 
        const response = await axios({
            method: 'get',
            url: `https://server-real-estate.herokuapp.com/api/v1/posts/${paramss.id}`,
            type: 'json'
        });

        if(response.status === 200){
            setitemcall(response.data)
        }
        console.log(setitemcall);
        setIsLoading(false);     
    }

    useEffect(()=>{
        callApi();    
        
    },[]);
    console.log(itemcall);
    
    //  const slideImages = [
    //     {
    //       url: 'https://datxanhdiaoc.com/wp-content/uploads/2017/10/banner-saigon-riverside-city-datxanhdiaoc-chuan.jpg',
    //       caption: 'Slide 1'
    //     },
    //     {
    //       url: 'https://th.bing.com/th/id/R.5e08f790717577cd56f8472054ddc229?rik=1ECcOJaKULOTcQ&riu=http%3a%2f%2fblogthumb.pstatic.net%2fMjAxOTExMjJfMTcz%2fMDAxNTc0NDA3MTI5Mzc3.x9Pxg6IKO9jsLmH0fRJzB4ykLYHAib8sZNo8nBTfwDgg.HVnlcAh7JgpqQFNPypm_slbJcuVHbKocFFSE5nkh00og.PNG.iloveu2904%2fimage.png%3ftype%3dw2&ehk=c3MevKYYTmuiDFUCstfJr05UEVN0N08UtF1y9pYwu3Y%3d&risl=&pid=ImgRaw&r=0',
    //       caption: 'Slide 2'
    //     },
    //     {
    //       url: 'https://dangxuanbao.com/wp-content/uploads/2018/03/Phoi-canh-tong-the-Q7-saigon-riverside-complex-1.jpg',
    //       caption: 'Slide 3'
    //     },
    //   ];


    return (
        
        <div>
            {itemcall.length>0 ? 
            <div>
                <div className='main-infor'>
                <Slide className='slide-img-item' >
                {itemcall[0].gallery.map((slideImage, index)=> (
                    <div className="item-slide" key={index} style={{'backgroundImage': `url(${slideImage})`}}>
                        <span>{index+1}</span>
                        </div>
                    
                    ))}
                </Slide>
                <div className='list-image'>
                    { itemcall[0].gallery.map((item)=>(
                        <img src={item}></img>
                    ))}
                </div>
                <h3>{itemcall[0].title}</h3>
                <p>Địa chỉ : {itemcall[0].address}</p> 
                <p>Mức giá : {itemcall[0].price}</p>
                <p>Diện tích : {itemcall[0].area}</p>
                <h5>Thông tin mô tả</h5>
                <p>{itemcall[0].description}</p>
                <h5>Đặc điểm bất động sản</h5>
                <p>Phân loại {itemcall[0].category}</p>
                <div>
                    <h5>Xem trên bẩn đồ</h5>
                    <GoogleMapComponent location={itemcall[0].location}></GoogleMapComponent>
                </div>

            </div>
            <div className='connect-infor'>
                <h3>Bài viết liên quan</h3>
            </div>
            </div> : 
            <div></div>}

            
        </div>
    )
}

export default InforItem