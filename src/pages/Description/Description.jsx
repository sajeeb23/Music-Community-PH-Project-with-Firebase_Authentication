import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Description = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch('/music.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedService = data.find((service) => service.id == id);
        if (selectedService) {
          setService(selectedService);
        }
      })
      .catch((error) => {
        console.error('Error fetching service data', error);
      });
  }, [id]);

  return (
    <div>
      {service ? (
        <>
          <img src={service.image} className='mt-16 mx-auto w-4/5' alt="" />
          <h1 className='text-5xl my-10 font-semibold text-center'>{service.title}</h1>
          <p className='text-xl w-4/5 mx-auto text-center'>{service.description}</p>
        </>
      ) : ""}
    </div>
  );
};

export default Description;
