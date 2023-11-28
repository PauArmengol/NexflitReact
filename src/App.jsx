import './App.css'
import { appRouter } from "./core/routes/appRouter"
import { RouterProvider } from 'react-router-dom'
import RootProvider from "./core/providers/RootProvider"

// Swiper
import { register as registerSwiper } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
registerSwiper();

const App = () => {

    return (

                <RootProvider>
                    <RouterProvider router={appRouter}/>
                </RootProvider>  
           
    )
}

export default App