
const Service = ({ title, image, description }) => {
    return (
        <div className="hover:cursor-pointer mx-2 md:mx-12 lg:mx-14">
            <div className="relative flex h-5/6 w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img src={image} alt="not found" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;
