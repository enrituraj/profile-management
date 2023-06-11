import React,{useState} from 'react'
import {useLogin} from './../../hooks/useLogin'
import { Link, useNavigate  } from 'react-router-dom'
import Navbar from './../Navbar/Navbar'
import './Form.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  let navigate = useNavigate();
    const [FormData, setFormData] = useState({
      email:"",
      password:""
    });
    let name,value;
  
    const handleinput = (e) =>{
      name = e.target.name;
      value = e.target.value;
      setFormData({...FormData,[name]:value});
    }
    
    
    const {login,isLoading,error} = useLogin()
    const LoginUser = async (e) =>{
      e.preventDefault();
      console.log(FormData);
  
      const {email,password} = FormData;
      await login(email,password)
      if(error != null){
        return navigate("/");
      }
  
    }
  
  
    const toast_property = () =>{
      const obj = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
      return obj
    }
  
    return (
      <>
      
      <Navbar/>
       <ToastContainer/>
        
    {/** showing error message to user */
      error && toast.error(error, toast_property())
    }
      <div className="form-body">
        <div className="form-box">
          <div className="form-header">
            <h3>Sign in</h3>
          </div>
          <div className="form-inner-body">
            <form method="post" onSubmit={LoginUser}>
              <div className="input-group">
                <input type="email" value={FormData.email} onChange={handleinput} placeholder='Email' name="email" id="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-group">
                <input type="password" value={FormData.password} onChange={handleinput} placeholder='Password' name="password" id="password" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-group">
                  <input type="checkbox" name="term" id="term" />
                
                <label htmlFor='term' className="checkbox">
                  Remember me
                </label>
              </div>
              <div className="input-group">
                <button className='btn' type="submit">Submit</button>
              </div>
            </form>
            <p>Don't have account yet ? <Link to={'/signup'}>Sign up</Link></p>
          </div>
        </div>
      </div>
      </>
    )
  }
  

export default LoginPage