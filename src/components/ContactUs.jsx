import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DisplayImage from '../assets/images/contact.avif';
import '../App.css';

const ContactUs = () => {

  // form Validation
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const isFormFilled = () => {
    return Object.values(formData).every((value) => value !== '');
  };
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // service_70jod7p

    setLoading(true);

    if (!isFormFilled()) {
      toast.error("Input Fields Cannot be blank!!!", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message text-sm'
      });
      setLoading(false);
    }
    
    else {
      emailjs.sendForm('service_70jod7p', 'template_gx7nomo', form.current, '_bgoMuy2VRB0iFLg5')
      .then((result) => {
        setLoading(false);
        console.log(result);
        toast.success("Message sent succesfully!!!", {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast-message text-sm'
        });
        e.target.reset();
      }, (error) => {
        setLoading(false);
        console.log(error);
        toast.error("Unable to send message!!!", {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast-message text-sm'
        });
      });
    }
  };

  return (
    <div>
      <div className='min-h-[70vh] px-5 py-10 w-full laptop:flex items-center justify-center gap-28 mx-auto mt-10'>
        <div className='laptop:w-[40%] w-[100%] laptop:h-[500px] h-[300px] laptop:relative laptop:left-20'>
          <img src={DisplayImage} className='h-full  w-full shadow-lg rounded-xl' alt="" />
        </div>
        <div className='laptop:w-[38%] w-full laptop:relative right-20 rounded-lg custom_shadow bg-white flex flex-col justify-center items-center py-10 px-2 mt-6 laptop:mt-0 laptop:px-5'>
          <h1 className='laptop:text-3xl text-xl font-semibold text-center text-gray-800'>
            Send Us A Message Now
          </h1>
          <form className='flex flex-col laptop:w-[400px] tablet:w-[350px] mobile_small:w-[300px] gap-3 mt-5' ref={form} onSubmit={sendEmail}>
            <input type="text" value={formData.user_name} onChange={handleChange} className='w-[100%] px-3 py-2 border-2 outline-none' placeholder='Enter your name' name="user_name" />
            <input type="email" value={formData.user_email} onChange={handleChange} className='w-[100%] px-3 py-2 border-2 outline-none' placeholder='Enter your email'name="user_email" />
            <textarea value={formData.message} onChange={handleChange} className='w-[100%] px-3 py-2 border-2 outline-none' name="message" placeholder='Enter your message'>

            </textarea>
            <div className='w-full relative'>
              <button type="submit" value="Send" className='w-full bg-[#006837] outline-none text-white text-lg py-2 font-semibold '>
              Message Us
              </button>
              {loading && <div className='absolute top-0 left-0 h-full w-full loading bg-[#0000007a]'>

              </div>}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ContactUs;
