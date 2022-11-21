const Greeting = () => {
    return (<>
        <div className=" mx-3 font-Inter sm:mx-6 md:mx-24 md:px-24 lg:mx-32 lg:px-32 overflow-hidden">
            <div className="greeting my-12">
                <p className='text-center font-black text-white text-6xl md:text-7xl' data-aos="fade-down" data-aos-delay="50"
                    data-aos-duration="1000">Welcome to <span data-aos="fade-right" className='text-[#0074BD]'>Redi</span> <span className='text-[#F1AF00]'>Theme</span></p>
            </div>
        </div>
    </>);
}

export default Greeting;