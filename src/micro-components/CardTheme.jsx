const CardTheme = ({ image, titleTheme, linkTheme }) => {
    return (<>
        <div className="content bg-[#191919] lg:bg-[#161616] hover:bg-[#191919] p-3" data-aos="fade-up" data-aos-delay="50"
            data-aos-duration="1000">
            <a href={linkTheme} target="_blank">
                <img src={image} alt="codesk" />
            </a>
            <div className="footer flex justify-between items-center my-3 md:my-5 text-white text-sm">
                <div className="title font-semibold">
                    <p>{titleTheme}</p>
                </div>
                <div className="demo bg-[#F1AF00] hover:bg-[#f1b100e7] py-2 px-5 md:py-2 md:px-7 rounded-sm font-semibold">
                    <a href={linkTheme} target="_blank" className='text-[#191919]'>
                        Demo
                    </a>
                </div>
            </div>
        </div>

    </>);
}

export default CardTheme;