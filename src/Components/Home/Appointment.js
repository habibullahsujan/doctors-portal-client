import React from 'react';
import Button from '../Common/Button';
import doctor from '../../Utilities/assets/images/doctor.png'
import background from '../../Utilities/assets/images/appointment.png'

const Appointment = () => {
    return (
        <div style={{background:`url(${background})`}} className='my-40'>
            <div className='block  lg:flex items-center'>
                <img className='h-[636px] -mt-36 hidden lg:block' src={doctor} alt="" />
                <div className='text-white p-10'>
                    <span className='text-info font-semibold text-lg'>Appointment</span>
                    <h2 className='font-bold text-2xl my-5'>Make an appointment Today</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>Make An Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;