import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../core/auth/hook/useAuth';

const Logout = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <button 
            onClick={handleLogout}
            style={{
                textAlign: "center",
                width: "100%",
                backgroundColor: "#e50914",
                fontSize: ".8em",
                padding: "10px 15px",
                marginLeft: "10px",
                marginBottom: "7px",
                color: "#fff",
                border: "none",
                fontWeight: "600",
                borderRadius: "4px",
                cursor: "pointer"
            }}
            >
            Logout
        </button>
    )
};

export default Logout