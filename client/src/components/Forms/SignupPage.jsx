import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Form.scss'
import Navbar from './../Navbar/Navbar'
import useSignup from './../../hooks/useSignup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  
  const {signup,isLoading,error,success} = useSignup()


  const [FormData, setFormData] = useState({
    name:"",
    email:"",
    username:"",
    password:""
  });

  let name,value;

  const handleinput = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setFormData({...FormData,[name]:value});
  }

  const RegisterUser = async (e) =>{
    e.preventDefault();
    const {name,email,username,password} = FormData;
    await signup(name,email,username,password);
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

    {/* adding navabr to page */}
    <Navbar isLogin="false"/>


    {/* adding react tostify to page */}
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />


    {/** showing error message to user */
      error && toast.error(error, toast_property())
    }
    {/** showing success message to user */
      success && toast.success(success, toast_property())
    }

    <div className="form-body">
      <div className="form-box">
        <div className="form-header">
          <h3>Sign up</h3>
        </div>
        <div className="form-inner-body" onSubmit={RegisterUser}>
          <form method='post'>
            <div className="input-group">
              <input value={FormData.name} onChange={handleinput} type="text" placeholder='Name' name="name" id="name" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-group">
              <input value={FormData.username} onChange={handleinput} type="text" placeholder='Username' name="username" id="username" />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-group">
              <input value={FormData.email} onChange={handleinput} type="email" placeholder='Email' name="email" id="email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <input value={FormData.password} onChange={handleinput} type="password" placeholder='Password' name="password" id="password" />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-group">
                <input type="checkbox" name="term" id="term" />
              
              <label htmlFor='term' className="checkbox">
                i agree with term & condition
              </label>
            </div>
            <div className="input-group">
              <button className='btn' type="submit">Submit</button>
            </div>
          </form>
          <p>Already have account ? <Link to={'/login'}>Sign in</Link></p>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default SignupPage