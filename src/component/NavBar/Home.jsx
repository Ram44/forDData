
import Carousel from '../carousel'
import { BottomNavBar } from '../homeComponent/BottomNavBar'
import { OurProduct } from '../homeComponent/OurProduct'
import Testimonial from '../homeComponent/Testomonial'
import { Wecome } from '../homeComponent/Wecome'


const Home = () => {
    return (
        <div className="container">
            <Carousel/>
            <Wecome/>
            <OurProduct/>
            <Testimonial/>
            
        </div>
    )
}
export default Home