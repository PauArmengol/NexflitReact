import './Navbar.css'
import Logo from '../Logo/Logo'



const Navbar = () => {

    return (

        <div className='container-navbar'>

            <Logo />
            
            <ul className='list-navbar'>
                <li className='item-navbar'><a href="#">Home</a></li>
                <li className='item-navbar'><a href="#">TV Shows</a></li>
                <li className='item-navbar'><a href="#">Movies</a></li>
                <li className='item-navbar'><a href="#">New & Popular</a></li>
                <li className='item-navbar'><a href="#">My List</a></li>
                <li className='item-navbar'><a href='#'>Browse by Languages</a></li>
            </ul>

        </div>
    )
}

export default Navbar