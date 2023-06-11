import { useState } from "react";
import useAuthContext from './useAuthContext'
const useSignup = () => {
    const [error, setError] = useState(null)
    const [success, setsuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (name,email,username,password)=>{
        setIsLoading(true)
        setError(null);

        const response = await fetch('/api/user/signup',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,email,username,password})
        })

        const json = await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(json.error)
        }
        if(response.ok){

            localStorage.setItem('user',JSON.stringify(json))
            setsuccess('User has been created successfully')
            dispatch({
                type:'LOGIN',
                payload:json
            })

            setIsLoading(false)
        }
    }
    return {signup,isLoading,error,success}
}

export default useSignup