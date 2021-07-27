import CartItem from '../components/CartItem';
import '../Styles.css';

function Cart() {
    return (
        <div className="md:flex ">
            <div className="sm:m-8 ">
                <h2 className="text-3xl font-bold italic">Shopping Cart</h2>

                <CartItem />
            </div>
            <div className=" m-8 border-4 border-b-0  text-center ">
                <div className=" px-20">
                    <p className="p-4">Subtotal (0) items:    </p>
                    <p className="font-bold mb-4 ">$499.99</p>
                </div>
                <div className="border-t-4 border-b-4">
                    <button className="bg-gray-600 p-2 m-8 rounded-sm text-white hover:bg-gray-800">
                        <span>Proceed to Checkout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;