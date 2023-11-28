import './Header.css'
import Navbar from '../Navbar/Navbar'
import SecondNavbar from '../SecondNavbar/SecondNavbar';



const Header = () => {
    
    return (
        <div className='container-header'>

            <Navbar />
            
            <SecondNavbar />

        </div>
      )

}

export default Header