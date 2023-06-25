import React from 'react'
import "../style/login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className='loginScreen'>
         
             <div className='loginImage'>
             </div>
           
            <div className='loginInput'>
            <input type='text' placeholder='Kullanıcı adı girin:'/>
            <input type='password' placeholder='Şifre girin:'/>
            <button>Giriş</button>
            </div>
            
        </div>
    </div>
  )
}

export default Login