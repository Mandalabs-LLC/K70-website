"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        organization: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full py-10 px-10 md:px-20 bg-blue-dark text-white tracking-wider"
        >
            <p className="bebasNeue uppercase tracking-[0.25rem] text-4xl text-center pb-10">
                Get In Touch
            </p>
            <div className="mb-5">
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full p-2 border border-white focus:outline-none bg-blue-dark focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email">Email Address *</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full p-2 border border-white focus:outline-none bg-blue-dark focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="organization">Organization</label>
                <select
                    name="organization"
                    id="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full p-2 border border-white focus:outline-none bg-blue-dark focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                        Select an organization
                    </option>
                    <option value="Himalayan Trust Nepal">Himalayan Trust Nepal</option>
                    <option value="Kanchenjunga Conservation Area">Kanchenjunga Conservation Area</option>
                    <option value="Samriddha Pahad">Samriddha Pahad</option>
                    <option value="Nepal Investment Bank Ltd.">Nepal Investment Bank Ltd.</option>
                </select>
            </div>

            <div className="mb-5">
                <label htmlFor="message">Your Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 block w-full p-2 border border-white focus:outline-none bg-blue-dark focus:ring-2 focus:ring-blue-500"
                    rows={4}
                />
            </div>

            <div className="w-full flex justify-center">
                <button
                    type="submit"
                    className="mt-5 py-3 px-5 border border-white focus:outline-none bg-blue-dark focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
