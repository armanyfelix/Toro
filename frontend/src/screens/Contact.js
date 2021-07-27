function Contact() {
    return (
        <section id="contact" className=" flex py-2 justify-center flex-wrap mx-auto mb-16">
            <form className="mt-28 flex-wrap mx-auto">
                <div className="form-group row">
                    <div className="flex mt-3 ">
                        <input type="text" id="name" className="rounded-sm p-2 w-80 " placeholder="Nombre" required />
                    </div>
                </div>

                <div className=" ">
                    <div className=" mt-3 ">
                        <input type="email" id="email" className="rounded-sm p-2 w-80" placeholder="Correo" required />
                    </div>
                </div>
                {/* <div className="mt-3">
                    <div className="">
                        <input type="subject" placeholder="Asunto" className="rounded-sm p-2 w-80" required/>
                    </div>
                </div> */}
                <div className="form-group mt-3">
                    <div>
                        <textarea id="message" className="rounded-sm p-2 h-36 w-80" placeholder="Mensaje" required />
                    </div>
                </div>
                <div className="form-group flex justify-center">
                    <button type="submit" className="btn btn-success mt-3  w-100 d-block border-gray-100 p-2 hover:bg-gray-500 bg-gray-400 rounded">
                        Send</button>
                </div>
            </form>

            <div className=" mt-36 p-36 flex-wrap mx-auto ">
                <a href="https://www.instagram.com/lemilitaire6/" className="hover:bg-gray-500  pb-5 p-4 rounded-md">
                    <img src="./img/instaLogo.png" alt="intagram" className="inline-flex   w-10 "/>
                    <label className="inline-flex font-semibold text-white">lemilitaire6</label>
                </a>
            </div>
        </section>
    )
}

export default Contact;
