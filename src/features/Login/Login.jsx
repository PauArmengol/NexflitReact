import { useState } from "react";
import { useAuth } from '../../core/auth/hook/useAuth'
import './Login.css'
import Logo from '../../assets/images/logoNexflit.png'

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

        <div className="login">

            <header className="login-header">
                <img 
                    src={Logo}
                    className="logo-login"
                    alt="Logo Nexflit"
                />
            </header>

            <div className="section-login">
                <form 
                    className="form-login"
                    onSubmit={handleSubmit}
                    >
                        <h1 className="h1-login">Log In</h1>
                        <input type="email" name="email" className="input" placeholder="Email..."/>
                        <input type="password" name="password" className="input"placeholder="Password..."/>
                        <button type="submit" className="button-submit">Log In</button>
                </form>

                <div className="section-footer-login">
                    <div className="login-checkbox">
                        <input type="checkbox"/>
                        <p>Remember Me</p>
                    </div>
                    
                    <div>
                        <a href="#">Do you need help?</a>
                    </div>
                </div>
            </div>
    
           
        </div>
        
    )
}

export default Login