
import Service from './Service';

const Services = ({ services }) => {
    return (
        <div className='py-10'>
            <h1>Our Services</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {services.map(service => (
                    <Service
                        key={service.id}
                        title={service.title}
                        image={service.image}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
