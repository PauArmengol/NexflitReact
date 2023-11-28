import './SecondNavbar.css'
import { MdOutlineSearch } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import avatar  from '../../../assets/images/Netflix-avatar.png'

const SecondNavbar = () => {

    return (
        
        <div className='container-second-navbar'>

            <div className='second-navbar-element'>
                <div className='searchBox'>
                    <button className='searchTab'>
                        <MdOutlineSearch 
                            className='icon-search'
                        />
                    </button>
                </div>
            </div>

            <div className='second-navbar-element'>
                <div className='kids'>
                    <a href='#' className='kids-link'>Kids</a>
                </div>
            </div>

            <div className='second-navbar-element'>
                <span className='notifications'>
                    <button className='notif-menu'>
                        <FaRegBell 
                            className='icon-notif'
                        />
                    </button>
                </span>
            </div>

            <div className='second-navbar-element'>
                <div className='account-menu-item'>
                    <div className='account-dropdown-button'>
                        <a href='#' role='button'>
                            <span className='profile-link'>
                                <img className='profile-icon' src={avatar}
                                alt='profile-image' />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SecondNavbar