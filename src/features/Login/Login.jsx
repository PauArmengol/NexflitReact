import { useState } from "react";
import { useAuth } from '../../core/auth/hook/useAuth'
import './Login.css'

const Login = () => {

    const { login } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
        const form = e.target;  
        const formData = new FormData(form); 
        const {email, password} = Object.fromEntries(formData); 

        form.reset();

        await login(email, password);
        } catch (error) {
            setError(error.response.data.msg)
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <div className="screen">
            <div className="screen_background">
            <img 
                src='../../assets/images/logoNexflit.png'
                className='screen_logo'
                alt='screen_logo'
            />

            </div>
            
            <form
              onSubmit={handleSubmit}
            >
                <input type='email' name='email'/>
                <input type='password' name='password' />
                <button type='submit' className="screen_button">Iniciar Sesión</button>
                <p>{error}</p>            
            </form>
        </div>
    )
}

export default Login