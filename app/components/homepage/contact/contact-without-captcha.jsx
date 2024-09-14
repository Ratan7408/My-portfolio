"use client";
// @flow strict
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactWithoutCaptcha() {
  const [error, setError] = useState({ email: false, required: false });
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      // Placeholder for email sending logic
      toast.success('Message sent successfully!');
      setUserInput({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold mb-8 text-[#16f2b3] text-2xl">
        Get In Touch
      </h2>
      <div className="max-w-3xl w-full bg-gradient-to-r from-[#0d1224] to-[#1a203b] rounded-lg shadow-lg border border-[#464c6a] p-6 lg:p-10">
        <p className="text-sm text-[#d3d8e8] mb-6">
          {"I'd love to hear from you! Whether you have a question, a project proposal, or just want to say hi, feel free to drop a message below. I'll get back to you as soon as possible."}
        </p>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-base">Your Name</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-base">Your Email</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userInput.email) });
              }}
              placeholder="Enter your email"
            />
            {error.email && (
              <p className="text-sm text-red-400">Please provide a valid email!</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-base">Your Message</label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
              placeholder="Write your message here"
            />
          </div>

          {error.required && (
            <p className="text-sm text-red-400 text-center">
              All fields are required!
            </p>
          )}

          <div className="flex justify-center">
            <a href="#_" onClick={handleSendMail} class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-full group">
              <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded-full group-hover:-mr-4 group-hover:-mt-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></span>
              </span>
              <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-full group-hover:mb-12 group-hover:translate-x-0"></span>
              <span class="relative flex items-center space-x-2 text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                <span>Send Message</span>
                <TbMailForward size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWithoutCaptcha;
