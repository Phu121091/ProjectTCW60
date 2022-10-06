import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {BsEyeSlash,BsEye} from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email,setEmail] = useState();
  const [pass,setPass] = useState();
  const navigate = useNavigate();
 
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      "email":`${email}`,
      "password":`${pass}`
    }

    const call = async () => {
      const response = await axios({
        method: 'post',
        url: 'https://server-real-estate.herokuapp.com/api/v1/users/login',
        data: user,
        type:'json'
      });
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("tokenUser", JSON.stringify(response.data.token));
      //  if (response.status==200) {toast.success('Đăng nhập  thành công')};
    }
    
    call();

    navigate("/log-in", { replace: true });
  }

  return (
    <div className='signin-container'>
        
        <h3>Đăng nhập</h3>
        <form className='signin' onSubmit={(e)=>handleLogin(e)}>
        <input type='text' placeholder='Tên đăng nhập' onChange={(event) => setEmail(event.target.value)}></input>
        <input type='password' placeholder='Mật khẩu' className='pass' onChange={(event) => setPass(event.target.value)}></input>
        <button type='submit'>Đăng nhập</button>
        <div>Chưa là thành viên? <Link to='/Dangki'>Đăng kí</Link> tại đây</div>
        </form>
    </div>
  )
}

export default Login