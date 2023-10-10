import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Service = ({ id, title, image }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
            once: true,
        });
    }, []);

    return (
        <Link to={`/service/${id}`}>
            <div data-aos="fade" className="hover:cursor-pointer hover:-translate-y-3 duration-200 mx-2 md:mx-12 lg:mx-14">
                <div className="relative hover:shadow-2xl flex h-5/6 w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
        </Link>
    );
};

export default Service;
