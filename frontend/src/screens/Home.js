import About from "../components/About";
import Contact from "../components/Contact";



function Home() {
    return (
        <div>
            
            <section className="w-full  text-center bg-gray-400 mt-20 p-28">
                <div>
                    <div>
                        <a href="#ProductList" className="text-gray-500  hover:text-blue-300">Ir a la tienda ---- </a>
                    </div>
                </div>
            </section>
            <Contact/>
            <About/>
        </div>
    )
}

export default Home
