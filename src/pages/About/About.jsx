import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    }, []);

    return (
        <div className="my-24 mx-16 bg-sky-500 rounded-2xl text-white">
            <div className='p-16'>
                <p
                    className="text-xl w-4/5 text-center"
                    data-aos="fade-right"
                >
                    Welcome to MusicCommunity, where music becomes an unforgettable journey. We are passionate about creating extraordinary musical experiences that resonate in the hearts of all who attend.
                </p>

                <h3
                    className="text-2xl font-bold underline mt-5"
                    data-aos="fade-right"
                >
                    Event Planning
                </h3>
                <p className="text-xl w-4/5" data-aos="fade-left">
                    Our event planning service at MusicCommunity is the cornerstone of unforgettable musical experiences. We meticulously oversee every detail, from venue selection to artist coordination, ensuring every element harmonizes to create an unforgettable symphony of memories.
                </p>

                <h3
                    className="text-2xl font-bold underline mt-5"
                    data-aos="fade-right"
                >
                    Technical Support
                </h3>
                <p className="text-xl w-4/5" data-aos="fade-left">
                    Behind the scenes, our technical experts work their magic to transform your event into a sensory masterpiece. From sound system setup to mesmerizing lighting design, we craft the canvas upon which the magic of music unfolds.
                </p>

                <h3
                    className="text-2xl font-bold underline mt-5"
                    data-aos="fade-right"
                >
                    Marketing and Promotion
                </h3>
                <p className="text-xl w-4/5" data-aos="fade-left">
                    At MusicCommunity, we are the storytellers who amplify the voice of your event, bringing it to life in the eyes of the world. With dynamic social media campaigns and captivating advertisements, we ensure your event becomes a global sensation.
                </p>

                <h3
                    className="text-2xl font-bold underline mt-5"
                    data-aos="fade-right"
                >
                    Artist Management
                </h3>
                <p className="text-xl w-4/5" data-aos="fade-left">
                    We act as the backstage hosts, ensuring that artists are at their best for your event. From contract negotiations to travel arrangements, we are dedicated to ensuring their brilliance shines on your stage.
                </p>

                <h3
                    className="text-2xl font-bold underline mt-5"
                    data-aos="fade-right"
                >
                    Safety Planning
                </h3>
                <p className="text-xl w-4/5" data-aos="fade-left">
                    Safety is our unwavering commitment at MusicCommunity. We leave no stone unturned in creating a secure environment, so attendees can immerse themselves in the event without worry.
                </p>

                <h3
                    className="text-2xl font-bold underline mt-5"
                    data-aos="fade-right"
                >
                    Fan Experience
                </h3>
                <p className="text-xl w-4/5" data-aos="fade-left">
                    We are the architects of joy, crafting an immersive world that elevates the fan experience. From interactive activities to event merchandise, we make every moment unforgettable, elevating fan engagement to new heights.
                </p>

                <h3
                    className="text-2xl font-bold underline mt-5"
                    data-aos="fade-right"
                >
                    Community Engagement
                </h3>
                <p className="text-xl w-4/5" data-aos="fade-left">
                    At MusicCommunity, we believe in fostering a sense of belonging among music enthusiasts. We host meet-ups, workshops, and online forums where fans and artists can connect, share, and celebrate their passion for music.
                </p>

                <h3
                    className="text-2xl font-bold underline mt-5"
                    data-aos="fade-right"
                >
                    Sustainability
                </h3>
                <p className="text-xl w-4/5" data-aos="fade-left">
                    We are committed to sustainable event management practices. MusicCommunity strives to reduce its environmental footprint through eco-friendly initiatives, ensuring that the magic of music coexists harmoniously with the planet.
                </p>
            </div>
        </div>
    );
};

export default About;
