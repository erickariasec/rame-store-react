import "./App.css";
import { CardsContainer } from "./components/CardsContainer";
import { Navbar } from "./components/Navbar";
// import { Promo } from "./components/Promo";

import "swiper/css/bundle";
import "./components/GallerySwiper.css";
import { GallerySwiper } from "./components/GallerySwiper";
import { ScrollUpButton } from "./components/ScrollUpButton";

function App() {
    
    return (
        <div className="body">
            <ScrollUpButton />
            {/* <Promo /> */}
            <Navbar />
            <GallerySwiper />
            <CardsContainer />
        </div>
    );
}

export default App;
