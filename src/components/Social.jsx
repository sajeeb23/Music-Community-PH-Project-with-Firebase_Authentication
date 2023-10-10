import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'


const Social = () => {
    return (
            <div className="social-media my-10 flex flex-col items-center justify-center">
                <h2 className='text-center text-5xl py-4 font-semibold underline mb-5 text-lime-500'>Connect <span className="text-black">With Us</span></h2>
                <ul className="text-4xl grid grid-rows-1 gap-6">
                    <li className='flex gap-2 items-center'> 
                        <div className='text-blue-700'><BsFacebook></BsFacebook></div>
                        <a href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li className='flex gap-2 items-center'> 
                        <div className='text-sky-600'><BsTwitter></BsTwitter></div>
                        <a href="https://www.twitter.com/">Twitter</a>
                    </li>
                    <li className='flex gap-2 items-center'> 
                        <div className='text-pink-700'><BsInstagram></BsInstagram></div>
                        <a href="https://www.instagram.com/">Instagram</a>
                    </li>
                    <li className='flex gap-2 items-center'> 
                        <div className='text-blue-500'><BsLinkedin></BsLinkedin></div>
                        <a href="https://www.linkedin.com/">LinkedIn</a>
                    </li>
                </ul>
            </div>
    );
};

export default Social;