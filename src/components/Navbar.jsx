import rediLogo from '../assets/redi-logo.svg'

const Navbar = () => {
    return (<>
        <div className="navbar py-2">
            <div className="content mx-3 sm:mx-6 ">
                <div className="left">
                    <div className="logo" data-aos="fade-down" data-aos-delay="200"
                        data-aos-duration="1000">
                        <img src={rediLogo} alt="redi-logo" className='h-10' />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Navbar;