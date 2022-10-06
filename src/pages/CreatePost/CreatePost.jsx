import React, { useState } from "react"

import './CreatePost.css'

const CreatePost = () => {
    const [sale_or_rent, setsale_or_rent] = useState('sale');
    const [categories, setCategories] = useState('');
    const [address, setAddress] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <>
            <div className="create--post">
                <div className="create--post__container">
                    <div className="create--post__item form__info-basic w100">
                        <div className="create--post__item-header">
                            <h2>Thông tin cơ bản</h2>
                            <p>Thông tin có dấu <span className="red">(*)</span> là bắt buộc</p>
                        </div>
                        <div className="create--post__item-body">
                            <div className="f aic border border-radius">
                                {sale_or_rent === 'sale' 
                                ? <div 
                                    className="w50 px05 align-c cursor bg-grey border-radius" 
                                    onClick={() =>
                                    setsale_or_rent('sale')
                                }>
                                    Bán
                                </div>
                                : <div 
                                    className="w50 px05 align-c cursor" 
                                    onClick={() =>
                                    setsale_or_rent('sale')
                                }>
                                    Bán
                                </div>}
                                {sale_or_rent === 'rent' 
                                ? <div 
                                    className="w50 px05 border-left align-c cursor bg-grey border-radius-r" 
                                    onClick={() =>
                                    setsale_or_rent('rent')
                                }
                                    >
                                    Cho Thuê
                                </div>
                                : <div 
                                    className="w50 px05 border-left align-c cursor" 
                                    onClick={() =>
                                    setsale_or_rent('rent')
                                }
                                    >
                                    Cho Thuê
                                </div>}
                            </div>

                            <div className="input_container">
                                <div>Loại bất động sản <span className="red">*</span></div>
                                <input 
                                    type="text"
                                    placeholder="VD: Nhà riêng"
                                    onChange={(e) => {
                                        setCategories(e.target.value)
                                    }}/>
                            </div>

                            <div className="input_container">
                                <div>Địa chỉ <span className="red">*</span></div>
                                <input 
                                    type="text"
                                    placeholder="Nhập địa chỉ bất động sản"
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}/>
                            </div>
                        </div>
                    </div>

                    <div className="create--post__item form__info-basic w100">
                        <div className="create--post__item-header">
                            <h2>Thông tin bài viết</h2>
                            <p>Không gộp nhiều bất động sản trong một tin rao, để quá trình đăng tin và duyệt nhanh hơn, xin lưu ý: gõ tiếng Việt có dấu và không viết tắt...</p>
                        </div>
                        <div className="create--post__item-body">

                            <div className="input_container">
                                <div>Loại bất động sản <span className="red">*</span></div>
                                <textarea 
                                    type="text"
                                    rows={3}
                                    placeholder="VD: Bán nhà riêng 50m2 chính chủ tại Cầu Giấy"
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}/>
                            </div>

                            <div className="input_container">
                                <div>Địa chỉ <span className="red">*</span></div>
                                <textarea 
                                    cols={30}
                                    rows={10}
                                    type="text"
                                    placeholder="Nhập mô tả chung về bất động sản của bạn. Ví dụ: Khu nhà có vị trí thuận lợi, gần công viên, gần trường học ... "
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost