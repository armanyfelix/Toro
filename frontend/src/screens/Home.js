
import MyCarousel from '../components/Carousel';



function Home() {
    return (
        <div className="bg-gray-800">
            <MyCarousel className=" mx-auto justify-center items-center " />
            <section className="w-full  text-center bg-gray-400 mt-20 p-28">
                <div>
                    <div>
                        <a href="#ProductList" className="text-gray-500  hover:text-blue-300">Ir a la tienda ---- </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
