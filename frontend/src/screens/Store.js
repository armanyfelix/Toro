
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import '../Styles.css';

function Store() {
    return (
        <div className="bg-gray-300">
            <div className="flex lg:mr-20 justify-center items-center ">
                <Link to="/cart" className="bg-gray-700 hover:bg-gray-900 p-2 flex  ">
                    <i className="fas fa-shopping-cart mt-1"> </i>
                    <span className=" items-center ml-2 mr-2">
                        Cart
                    </span>
                    <span className="bg-white text-black w-5 h-5 text-sm rounded-full align-top flex justify-center items-center mt-1 cursor-pointer">0</span>
                </Link>
            </div>
            <div className="product grid grid-cols-4 pt-16">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default Store;
