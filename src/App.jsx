import './App.css'
import { AppRouter } from "./core/routes/appRouter"
import { RouterProvider } from 'react-router-dom'
import RootProvider from "./core/providers/RootProvider"

// Swiper
import { register as registerSwiper } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
registerSwiper();




const App = () => {

    return (

           <>
           
                <RootProvider>
                    <RouterProvider router={AppRouter}/>
                </RootProvider>  
           
           </> 
        
    )
}

export default App