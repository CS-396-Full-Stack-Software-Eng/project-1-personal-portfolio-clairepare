"use client"
import React, {useState} from 'react'
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            emsil: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        //send the data to the server
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        
        console.log(resData);

        if (resData.status === 200) {
            console.log('Message sent.');
            setSubmitted(true);
        }
    }

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_vcar(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div><h5 className="text-xl font-bold text-white my-2">Contact Me!</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                Feel free to reach out about anything!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="github.com">
                    <Image src={'/../favicon.ico'} alt="Github Icon" width={300} height={300}/>
                </Link>
                <Link href="linkedin.com">
                    <Image src={'/../favicon.ico'} alt="Linkedin Icon" width={300} height={300}/>
                </Link>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label 
                            htmlFor="email" 
                            type="email" 
                            className="text-white mb-2 block text-sm font-medium">
                                Your Email
                        </label>
                        <input 
                            name='email'
                            type="email" 
                            id="email" 
                            required 
                            placeholder="janedoe@gmail.com" 
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            type="email"
                            className="text-white mb-2 block text-sm font-medium">
                                Subject
                        </label>
                        <input
                            name='subject'
                            type="text"
                            id="subject"
                            required
                            placeholder="Reaching Out!"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white mb-2 block text-sm font-medium">
                                Message Body
                        </label>
                        <textarea
                            name='message'
                            type="text"
                            id="message"
                            required
                            placeholder="Reaching out about..."
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                    <button
                        type="submit"
                        
                        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                            Send Message
                    </button>
                    {
                        submitted && (
                            <p className="text-green-500 text-sm mt-2">Email ent!</p>
                        )
                    }
                </form>
            </div>
        </div>
    </section>
  )
}

export default EmailSection