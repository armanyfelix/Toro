import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function MyCarousel() {
    return (
        <Carousel dynamicHeight 
                    autoFocus
                    emulateTouch
                    infiniteLoop
                    swipeScrollTolerance={20}
                    useKeyboardArrows 
                    className=" xl:w-1/2 xl:ml-96 justify-start"
                >
            <div>
                <img src={'./img/cholofilosofoo.jpg'} alt=" " />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={'./img/gatito.jpg'} alt=" " />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={'./img/gtah.jpg'} alt=" " />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={'./img/GTAVzoom.jpg'} alt=" " />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={'./img/hng_kng.jpg'} alt=" " />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={'./img/libertecrt.jpg'} alt=" " />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={'./img/mairqon.jpg'} alt=" " />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={'./img/patito.jpg'} alt=" " />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={'./img/pndrocrt.jpg'} alt=" " />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={'./img/REDfull.jpg'} alt=" " />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={'./img/vidavrg.jpg'} alt=" " />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={'./img/topopinturas_2.jpg'} alt=" " />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default MyCarousel;



//     <img src={'./img/cholofilosofoo.jpg'} alt=" " />
//     <img src={'./img/gatito.jpg'} alt=" " />
//     <img src={'./img/gtah.jpg'} alt=" " />
//     <img src={'./img/GTAVzoom.jpg'} alt=" " />
//     <img src={'./img/hng_kng.jpg'} alt=" " />
//     <img src={'./img/libertécrt.jpg'} alt=" " />
//     <img src={'./img/mairqon.jpg'} alt=" " />
//     <img src={'./img/patito.jpg'} alt=" " />
//     <img src={'./img/pndrocrt.jpg'} alt=" " />
//     <img src={'./img/REDfull.jpg'} alt=" " />
//     <img src={'./img/topopinturas_2.jpg'} alt=" " />
//     <img src={'./img/vidavrg.jpg'} alt=" " />
