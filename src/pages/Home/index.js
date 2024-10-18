import HomeProductNew from "./HomeProductNew";
import HomeProductSencond from "./HomeProductSencond";
import HomeProductThree from "./HomeProductThree";
import Slider from "./Slider"

const Home = () =>{
    return(
        <div>
            <Slider/>
            <HomeProductNew />
            <HomeProductSencond/>
            <HomeProductThree/>
        </div>
        
    )
}
export default Home;