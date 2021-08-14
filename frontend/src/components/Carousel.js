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
                <img src={'./img/cholofilosofoo.jpg'} alt="cholo filosofo" />
                <p className="legend">Cholo Filosofo</p>
            </div>
            <div>
                <img src={'./img/gatito.jpg'} alt="gatito" />
                <p className="legend">Gatito</p>
            </div>
            <div>
                <img src={'./img/gtah.jpg'} alt="gtah" />
                <p className="legend">Gtah</p>
            </div>
            <div>
                <img src={'./img/GTAVzoom.jpg'} alt="gtavzoom" />
                <p className="legend">GTAVzoom</p>
            </div>
            <div>
                <img src={'./img/hng_kng.jpg'} alt="hnk_kng" />
                <p className="legend">hng_kng</p>
            </div>
            <div>
                <img src={'./img/libertecrt.jpg'} alt="libertecrt" />
                <p className="legend">Libertécrt</p>
            </div>
            <div>
                <img src={'./img/mairqon.jpg'} alt="mairqon" />
                <p className="legend">Mairqon</p>
            </div>
            <div>
                <img src={'./img/patito.jpg'} alt="patito" />
                <p className="legend">Patito</p>
            </div>
            <div>
                <img src={'./img/pndrocrt.jpg'} alt="pndrocrt" />
                <p className="legend">Pndrocrt</p>
            </div>
            <div>
                <img src={'./img/REDfull.jpg'} alt="redfull" />
                <p className="legend">REDfull</p>
            </div>
            <div>
                <img src={'./img/vidavrg.jpg'} alt="vidavrg" />
                <p className="legend">Vidavrg</p>
            </div>
            <div>
                <img src={'./img/topopinturas_2.jpg'} alt="topopinturas 2" />
                <p className="legend">Topopinturas 2</p>
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
