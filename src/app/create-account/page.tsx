"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateAccount() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const router = useRouter()


  const handleSubmit = (e: { preventDefault: () => void; }) => {

    e.preventDefault()

    router.push('/dashboard')

  }

  return (
    <div className="flex flex-col justify-center min-h-screen border">
      <section className="bg-[#E2EDF2] w-[60%] mx-auto px-20 py-14 rounded-xl relative">
        {/* Back Arrow for Previous Step */}
        {step > 1 && (
          <div
            className="absolute top-14 left-8 cursor-pointer"
            onClick={handlePrevious}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-xl text-[#333333]"
            />
          </div>
        )}

        <div className="flex flex-col items-center">
          <h3 className="text-[#333333] font-semibold text-3xl">
            Create an account
          </h3>
          <p className="mt-4">
            Already have an account?
            <Link href={"/login"}>
              <span className="text-basecolour cursor-pointer"> Log in </span>
            </Link>
          </p>

          {/* Steps progress bar */}
          <ul className="steps lg:steps-horizontal mt-8 ">
            <li
              className={`step ${step >= 1 ? "step-success" : ""} text-sm px-4`}
            >
              Enter your email address
            </li>
            <li className={`step ${step >= 2 ? "step-success" : ""} text-sm`}>
              Provide your basic info
            </li>
            <li className={`step ${step === 3 ? "step-success" : ""} text-sm`}>
              Create your password
            </li>
          </ul>


        </div>

        {/* Conditional Form Sections */}
        <form onSubmit={handleSubmit} className="mt-10">
          {step === 1 && (
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#666666] mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="p-4 border border-[#A6C5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-basecolour"
                placeholder="Enter your email address"
              />
            </div>
          )}

          {step === 2 && (
            <>
              <div className="flex flex-col mt-6">
                <label htmlFor="firstname" className="text-[#666666] mb-2">
                  First Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  className="p-4 border border-[#A6C5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-basecolour"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex flex-col mt-6">
                <label htmlFor="lastname" className="text-[#666666] mb-2">
                  Last Name
                </label>
                <input
                  id="lastname"
                  type="text"
                  className="p-4 border border-[#A6C5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-basecolour"
                  placeholder="Enter your last name"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="flex flex-col mt-6">
                <label htmlFor="password" className="text-[#666666] mb-2">
                  Create Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="p-4 border border-[#A6C5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-basecolour"
                  placeholder="Create Password"
                />
              </div>
              <div className="flex flex-col mt-6">
                <label
                  htmlFor="confirm_password"
                  className="text-[#666666] mb-2"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm_password"
                  type="password"
                  className="p-4 border border-[#A6C5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-basecolour"
                  placeholder="Confirm Password"
                />
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-end mt-6">
            {step < 3 && (
              <button
                type="button"
                className="bg-basecolour text-white  py-4 px-4 rounded-lg w-full font-semibold"
                onClick={handleNext}
              >
                Next
              </button>
            )}

            {step === 3 && (
              <button
                type="submit"
                className="bg-basecolour text-white py-4 px-4 rounded-lg w-full font-semibold"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
