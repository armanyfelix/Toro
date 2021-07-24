import React from 'react'
import { Link } from 'react-router-dom';

function Cuadro() {
    return (
        <section className="p-10 flex flex-col justify-between">
            <div className="bg-white shadow-lg p-3 rounded lg:w-64">
                <div>
                    <img src="./img/cholofilosofoo500.jpg" className="bg-cover bg-center w-full bg-gray-300 rounded" alt="Cuadro a la venta"/>
                </div>
                <div className="mt-6">
                    <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
                    Cholo Filosofo
                    </p>
                    <p className="text-sm text-gray-600 font-hairline">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p>
                        $9999.99
                    </p>
                </div>
                <div className="mt-6">
                    <Link 
                        to={`/cuadro/${1111}`}
                        className="rounded justify-center shadow-md flex items-center bg-gray-400 px-4 py-2 text-white hover:bg-gray-700">
                    View
                    </Link>
                </div>
            </div> 
        </section>
    )
}

export default Cuadro;
