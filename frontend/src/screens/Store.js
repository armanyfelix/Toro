
import { Link } from 'react-router-dom';
import Cuadro from '../components/Cuadro';
import '../components/Styles.css';

function Store() {
    return (
        <div>
            <div className="flex lg:mr-20 items-center ">
                <Link to="/cart" className="bg-gray-700 hover:bg-gray-900 p-2 flex rounded">
                    <i className="fas fa-shopping-cart mt-1"> </i>
                    <span className=" items-center ml-2 mr-2">
                        Cart
                    </span>
                    <span className="bg-white text-black w-5 h-5 text-sm rounded-full flex justify-center items-center mt-1 cursor-pointer">0</span>
                </Link>
            </div>
            <div className="cuadro grid grid-cols-4">
                <Cuadro/>
                <Cuadro/>
                <Cuadro/>
                <Cuadro/>
                <Cuadro/>
                <Cuadro/>
                <Cuadro/>
                <Cuadro/>
                <Cuadro/>
                <Cuadro/>
                <Cuadro/>
                <Cuadro/>
            </div>
        </div>
    )
}

export default Store;
