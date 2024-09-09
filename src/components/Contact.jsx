import { useState } from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_75x90wf', 'template_1qog1aq', formData, 'FVNQuNYz4dhXGFPjQ')
      .then((response) => {
        console.log(response);
        alert('Message sent successfully!');
      }, (error) => {
        console.error(error);
        alert('Failed to send message, please try again.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-wrap">
      <div className="p-8 rounded-lg shadow-lg w-full lg:w-1/2 item-center">
        <h2 className="text-center text-4xl">Contact</h2>
        <h2 className="mt-6 text-2xl font-thin lg:mt-12 lg:text-4xl text-center">
          Let&apos;s Work Together
        </h2>
        <h2 className="mt-6 px-6 font-light text-center">I&apos;d love to hear from
           you! Whether you have a project in mind or just want to say hello, feel 
           free to reach out using this form.
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-6 text-3xl ">
          <span className="text-whitecursor-pointer hover:text-blue-500"> 
            <FaLinkedin/> 
          </span>
          <span className="text-whitecursor-pointer hover:text-blue-500"> 
            <FaGithub/> 
          </span>
          <span className="text-whitecursor-pointer hover:text-blue-500"> 
            <FaInstagram/> 
          </span>
          <span className="text-whitecursor-pointer hover:text-blue-500"> 
            <FaSquareXTwitter/> 
          </span>
        </div>
      </div>
      <div className="bg-neutral-800 p-8 rounded-lg shadow-lg w-full lg:w-1/2 lg:p-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border border-blue-500 rounded-md bg-black text-blue-500 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"          
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border border-blue-500 rounded-md bg-black text-blue-500 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 border border-blue-500 rounded-md bg-black text-blue-500 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="border-2 border-blue-500  bg-black hover:bg-blue-500 hover:text-black 
              text-blue-500 font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
