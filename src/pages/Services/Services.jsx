import React from 'react';
import Service from './Service';

const Services = ({ services }) => {
    return (
        <div className='py-10'>
            <h1 className='text-center text-5xl py-4 font-semibold underline mb-5 text-lime-500'>Our <span className='text-black'>Services.</span></h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {services?.map(service => (
                    <Service
                        key={service.id}
                        id={service.id}  // Pass the ID as a prop
                        title={service.title}
                        image={service.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
