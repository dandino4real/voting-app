"use client";

import Image from "next/image";
import { useState } from "react";

export default function Profile() {
  const [click, setClick] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(false);

  return (
    <div>
      <section>
        {!click && (
          <div className=" w-[75%] mx-auto mt-24 p-8 bg-[#fff] border flex flex-col items-center rounded-xl">
            <p className=" text-6xl text-center">🎉</p>
            <h3 className=" text-basecolour font-semibold text-3xl mt-6 text-center">
              Welcome William!
            </h3>
            <p className=" mt-5 w-[60%] text-center">
              Please complete your profile to access to the dashboard and
              explore our amazing features.
            </p>
            <button
              className="w-full py-3 px-4 mt-10 bg-basecolour text-[#fff] font-semibold rounded-xl"
              onClick={() => setClick(true)}
            >
              Complete your profile
            </button>
          </div>
        )}
        {click && !profileCompleted && (
          <div className=" w-[75%] mx-auto mt-20 p-8 bg-[#fff] border  rounded-xl">
            <div className="flex flex-col items-center">
              <Image
                className="rounded-full w-24 h-24 cursor-pointer"
                src={"/photo.svg"}
                alt="candidate"
                width={500}
                height={300}
                sizes="100vw"
              />
              <p>Add photo</p>
            </div>

            <form action="action" className=" mt-8">
              <div className="flex flex-col">
                <label htmlFor="phone_number" className=" text-[#666666] mb-2">
                  Phone number
                </label>
                <input
                  id="phone_number"
                  type="text"
                  className="p-3 border border-[#A6C5DD] rounded-lg focus:outline-none  focus:ring-basecolour w-full"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex flex-col mt-6">
                <label htmlFor="lastname" className=" text-[#666666] mb-2">
                  State
                </label>
                <input
                  id="password"
                  type="text"
                  className="p-3 border border-[#A6C5DD] rounded-lg focus:outline-none  focus:ring-basecolour"
                  placeholder="Enter your state"
                />
              </div>

              <div className=" bg-basecolour p-4 mt-10 rounded-lg">
                <button
                  className=" w-full text-[#fff] text-lg font-semibold"
                  onClick={() => setProfileCompleted(true)}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        )}

        {profileCompleted && (
          <div>
             <div className=" w-[75%] mx-auto mt-14  bg-[#fff] rounded-xl border">
            <div className=" h-28 bg-basecolour rounded-t-xl border"></div>
            <div className=" py-14 ps-10 pe-20  bg-[#E9F1F7] relative">
              <div className=" flex justify-end gap-10 ">
                <div className="flex flex-col">
                  <label
                    htmlFor="first_name"
                    className=" text-[#666666] text-sm mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    className="px-3 py-2 border border-[#A6C5DD] rounded-lg focus:outline-none  focus:ring-basecolour text-sm w-full"
                    value={"William"}
                    disabled
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="last_name"
                    className=" text-[#666666] text-sm mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    className="px-3 py-2 border border-[#A6C5DD] rounded-lg focus:outline-none  focus:ring-basecolour text-sm w-full"
                    value={"Peter"}
                    disabled
                  />
                </div>
              </div>

              <div className=" flex gap-10 justify-end mt-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className=" text-[#666666] text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="px-3 py-2 border border-[#A6C5DD] rounded-lg focus:outline-none  focus:ring-basecolour text-sm w-full"
                    value={"williampeter@gmail.com"}
                    disabled
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone_number"
                    className=" text-[#666666] mb-2 text-sm"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone_number"
                    type="text"
                    className="px-3 py-2 border border-[#A6C5DD] rounded-lg focus:outline-none  focus:ring-basecolour text-sm w-full"
                    value={"+1 202 591-4915"}
                    disabled
                  />
                </div>
              </div>

              <div className=" flex gap-10 justify-end mt-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="state"
                    className=" text-[#666666] text-sm mb-2"
                  >
                    State
                  </label>
                  <input
                    id="state"
                    type="text"
                    className="px-3 py-2 border border-[#A6C5DD] rounded-lg focus:outline-none  focus:ring-basecolour w-full text-sm"
                    value={"Peter"}
                    disabled
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="voter_registration_status"
                    className=" text-[#666666] text-sm mb-2"
                  >
                    Voter&apos;s registration status
                  </label>
                  <input
                    id="voter_registration_status"
                    type="text"
                    className="px-3 py-2 border border-[#A6C5DD] rounded-lg focus:outline-none  focus:ring-basecolour  text-sm w-full"
                    value={"registered"}
                    disabled
                  />
                </div>
              </div>

              <div className=" absolute -top-20 left-10 z-2">
              <Image
                    className="rounded-full w-40 h-40 object-cover "
                    src={'/demo-img-2.png'}
                    alt="profile_picture"
                    width={500}
                    height={300}
                    sizes="100vw"
                  />

              </div>
            </div>
          </div>
            <div className="mt-6 flex gap-4 justify-center items-center border border-[#8FB9CD] rounded-xl py-4 w-[75%] mx-auto ">
            <Image
                    className=" w-6 h-4"
                    src={'/wallet.svg'}
                    alt="metamask"
                    width={500}
                    height={300}
                    sizes="100vw"
                  />
              <p className="text-[#5797B4] text-lg font-semibold">Connect wallet</p>

            </div>
          </div>
         
        )}
      </section>
    </div>
  );
}
