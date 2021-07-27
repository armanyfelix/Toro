import './ProductScreen.css';

function ProductScreen() {
    return (
        <section className="productscreen max-w-7xl m-4 flex  mx-auto ">
            <div className="productscreen__left flex">
                <div className="m-4 left__image mx-auto md:ml-5">
                    <img src="/img/cholofilosofoo.jpg" alt=" " />
                </div>
                <div className="left__info mt-4 ml-6">
                    <p className="font-bold uppercase text-3xl mb-6">cholofilosofoo</p>
                    <p><span className="font-semibold">Description: </span>Lorem Imput full stack ecommerce cart build 
                        (redux, react, node, express, mongoDB) </p>
                </div>
            </div>
            
            <div className="productscreen__right md:mr-5 mt-4 h-1/3 flex w-36 mx-auto -pr-2  border-2 p-2">
                <div className="right-info">
                    <p className="border-b-2 text-center font-bold mb-3 pb-1">
                         <span>$499.99</span>
                    </p>
                    <p className="mb-3">
                        Status: <span>In Stock</span>
                    </p>
                    <p className="mb-3">
                        Size
                        <select className="border">
                            <option value="100x200">100x200</option>
                            <option value="100x200">100x200</option>
                            <option value="100x200">100x200</option>
                            <option value="100x200">100x200</option>
                            <option value="100x200">100x200</option>
                        </select>
                    </p>
                    <p className=" mb-6">
                         Qty
                        <select className="border">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <p className="bg-gray-600 hover:bg-gray-800 text-center border-sm p-1 mb-3 text-white">
                        <button type="button">Add To Cart</button>
                    </p>
                    <p className="bg-gray-600 hover:bg-gray-800 text-center border-sm p-1 text-white">
                        <button type="button">Buy now</button>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProductScreen;
