import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  // Initialize react-hook-form and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // State for phone input and submission success
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to run on form submission
  const onSubmit = (data) => {
    if (!phone || !/^[0-9]+$/.test(phone)) {
      return;
    }

    // Adds phone to form data
    data.phone = phone;

    console.log(data);
    setIsSubmitted(true);
    reset();  // Resets form input after submission
    setPhone("");
  };

  // Auto-hide the successfull message after 5 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section className="px-4 md:px-6 py-10 mt-15">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center text-[#4532FC]">
        Contact us
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Speak with our team to see how we can help your business.
      </p>

      {/* Success Message */}
      {isSubmitted && (
        <div className="text-green-600 text-center font-medium mb-4">
          Your message has been sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-3xl mx-auto flex flex-col gap-4 bg-white rounded-2xl p-6 md:p-10">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded-2xl w-full"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="p-4 border border-gray-300 rounded-2xl w-full"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500">Email is required</span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="text-red-500">Please provide a proper email</span>
          )}

          {/* Phone Input */}
         <div className="relative w-full">
          <PhoneInput
            country="us"
            value={phone}
            onChange={(value) => setPhone(value)}
            placeholder="Your best contact number"
            containerClass="!w-full"
            inputClass="!w-full !h-[58px] !pl-16 !pr-4 !py-[15px] !text-base !border !border-gray-300 !rounded-2xl !focus:outline-none "
            buttonClass="!bg-white !border-0 !rounded-l-2xl !absolute !left-2 !top-[50%] !transform !-translate-y-1/2"
          />
          </div>

          {/* Company Name Textarea */}
          <textarea
            placeholder="Business or company name"
            className="p-4 border border-gray-300 rounded-2xl h-32 resize-none w-full"
            {...register("company", { required: "Company name is required" })}
          />
          {errors.company && (
            <span className="text-red-500">{errors.company.message}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#4532FC] text-white px-6 py-3 rounded-2xl font-semibold w-full sm:w-48 self-center hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
