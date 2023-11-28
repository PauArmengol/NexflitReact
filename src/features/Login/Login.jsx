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
                        <h1 className="h1-login">Iniciar Sesión</h1>
                        <input type="email" name="email" className="input"/>
                        <input type="password" name="password" className="input"/>

                        <button type="submit" className="button-submit">Iniciar Sesión</button>

                </form>

                <div>
                    <input type="checkbox"/>
                    <p>Recordarme</p>
                </div>
                <div>
                    <p>¿Necesitás ayuda?</p>
                </div>
            </div>
    
           
        </div>
        
    )
}

export default Login