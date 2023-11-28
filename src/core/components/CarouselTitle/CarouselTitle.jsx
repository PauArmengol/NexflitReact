import './CarouselTitle.css'

const CarouselTitle = ({ children, ...props }) => {

    return (
       <h2 className='title-carousel'{...props}>{children}</h2>
    )
}

export default CarouselTitle