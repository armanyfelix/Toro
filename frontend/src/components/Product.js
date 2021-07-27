import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="p-10 flex flex-col justify-between">
            <Link to={`/cuadro/${1111}`} 
                className="bg-white hover:shadow-xl transform hover:scale-110 cursor-pointer ease-out transition-all  hover:bg-gray-100 p-4  lg:w-76">
                <div>
                    <img src="./img/cholofilosofoo500.jpg" className="bg-cover bg-center w-full bg-gray-300" alt="Cuadro a la venta"/>
                </div>
                <div className="mt-2 text-center">
                    <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
                    Cholo Filosofo
                    </p>
                    
                    <p className="font-bold">
                        $9999.99
                    </p>
                </div>
            </Link> 
        </div>
    )
}

export default Product;
