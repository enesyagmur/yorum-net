import React from 'react'
import "../style/login.css"
import { useSelector } from 'react-redux'


const Login = () => {
 
const {data} = useSelector((state)=>state.users)
const enter = () =>{
  console.log(data);
}
  return (
    <div className='login'>
        <div className='loginScreen'>
         
             <div className='loginImage'>
             </div>
           
            <div className='loginInput'>
            <input type='text' placeholder='Kullanıcı adı girin:'/>
            <input type='password' placeholder='Şifre girin:'/>
            <button onClick={enter}>Giriş</button>
            </div>
            
        </div>
    </div>
  )
}

export default Login