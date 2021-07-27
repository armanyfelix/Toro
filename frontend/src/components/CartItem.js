import { Link } from 'react-router-dom';


function CartItem() {
    return (
        <div className=" mt-10 border-2 rounded-md text-sm sm:text-base">
            <div className=" p-1 xl:gap-36 grid grid-cols-5 rounded-md bg-gray-300 place-items-center ">
                <div className="p-1">
                    <img src="/img/gatito.jpg" alt="product cuadro" />
                </div>  

                <Link to={`/cuadro/${111}`} className=" no-underline hover:text-white   ">
                    <p>Producto 1</p>
                </Link>    

                <p>$499.99</p>

                <div className="border-black">
                    <select className="sm:p-1 rounded-sm hover:border-black">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <button className="sm:p-2 p-1 text-red-600 rounded-sm bg-gray-200 border-black 
                        cursor-pointer ease-out transition-all hover:bg-gray-700 focus:scale-110 
                        hover:scale-110 transform">
                    <i><svg xmlns="http://www.w3.org/2000/svg" 
                        class="h-5 w-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </i>
                </button>                        
            </div>
        </div>
    )
}

export default CartItem;
