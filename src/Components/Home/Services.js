import React from 'react';
import service1 from '../../Utilities/assets/images/cavity.png'
import service2 from '../../Utilities/assets/images/fluoride.png'
import service3 from '../../Utilities/assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services=[
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image:service2,
        },
        {
            id:2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image:service1,

        },
        {
            id:3,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image:service3,
        },
    ]
    return (
        <div className='my-10'>
            <h1 className='font-bold text-4xl text-center'>Our Services</h1>
            <p className='text-center text-lg font-semibold my-5'>Service We Provide</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-5'>
            {
                services.map(service=><Service key={service.id} service={service}/>)
            }
            
            </div>
         
        </div>
    );
};

export default Services;