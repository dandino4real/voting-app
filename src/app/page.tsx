"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

import "../lib/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "animate.css";
import Image from "next/image";

import "flowbite/dist/flowbite.css";

// Example candidate data
const candidates = [
  {
    id: 1,
    name: "Frank Beeta",
    image: "/demo-img-1.avif",
    flag: "/democratic.svg",
    party: "Democratic party",
  },
  {
    id: 2,
    name: "William peter",
    flag: "/republic.svg",
    party: "Republican party",
    image: "/demo-img-2.png",
  },
  {
    id: 3,
    name: "Terence Morgan",
    flag: "/whig.svg",
    party: "Modern whig party",
    image: "/demo-img-3.png",
  },
  {
    id: 4,
    name: "Clara Ben",
    flag: "/republic.svg",
    party: "Libertarian party",
    image: "/demo-img-4.png",
  },
  {
    id: 5,
    name: "Ben Teen",
    flag: "/democratic.svg",
    party: "Socialist party",
    image: "/demo-img-5.jpeg",
  },
  {
    id: 6,
    name: "Solman Khan",
    flag: "/whig.svg",
    party: "Modern whig party",
    image: "/demo-img-6.png",
  },
];

const articles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    body: "Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit nisl mauris dictum. Sed auctor iaculis varius viverra in feugiat.Urna nec  ipsum dolor sit amet consectetur. ",
    image: "/articles_img_1.jpeg",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    body: "Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit nisl mauris dictum. Sed auctor iaculis varius viverra in feugiat.Urna nec  ipsum dolor sit amet consectetur. ",
    image: "/articles_img_2.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    body: "Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit nisl mauris dictum. Sed auctor iaculis varius viverra in feugiat.Urna nec  ipsum dolor sit amet consectetur. ",
    image: "/articles_img_3.jpeg",
  },
];


const feeds = [
  {
    id: 1,
    video: "/videos/election-coverage-1.mp4", 
    title: "Election Day Highlights", 
    description:
      "Key moments from the ongoing election, including interviews and live reactions.", 
  },
  {
    id: 2,
    video: "/videos/election-debate.mp4",
    title: "Candidate Debate 2024",
    description:
      "A heated debate between the presidential candidates on key national issues.",
  },
  {
    id: 3,
    video: "/videos/voter-turnout.mp4",
    title: "Voter Turnout Update",
    description:
      "Latest updates on voter turnout across the country as people head to the polls.",
  },
  {
    id: 4,
    video: "/videos/polling-station-issues.mp4",
    title: "Polling Station Issues",
    description:
      "Reports of issues at polling stations, including long lines and equipment malfunctions.",
  },
  {
    id: 5,
    video: "/videos/winner-announcement.mp4",
    title: "Election Winner Announcement",
    description: "The moment when the election winner is officially announced.",
  },
  {
    id: 6,
    video: "/videos/election-debate.mp4",
    title: "Candidate Debate 2024",
    description:
      "A heated debate between the presidential candidates on key national issues.",
  },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);



  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle previous slide
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? feeds.length - 1 : prevIndex - 1
    );
  };

  // Function to handle next slide
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === feeds.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Check if the previous button should be disabled
  const isPrevDisabled = activeIndex === 0;

  // Check if the next button should be disabled
  const isNextDisabled = activeIndex >= feeds.length - 1;

  // Countdown timer for the next election
  useEffect(() => {
    const countdown = setInterval(() => {
      const electionDate = new Date("2024-11-05T00:00:00");
      const now = new Date();
      const diff = electionDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(countdown);
        setTimeLeft("Election is happening now!");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const activeSlide = document.querySelector(".carousel-item.active");

      // Null check to ensure activeSlide exists
      if (activeSlide) {
        let nextSlide = activeSlide.nextElementSibling as HTMLElement | null;

        if (!nextSlide) {
          nextSlide = document.querySelector(
            ".carousel-item:first-child"
          ) as HTMLElement;
        }

        // Remove the 'active' className from the current slide
        activeSlide.classList.remove("active");

        // Add the 'active' className to the next slide
        nextSlide?.classList.add("active");
      }
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentSections = sectionsRef.current; // Store the current value

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when section comes into focus
          entry.target.classList.add("animate-slide-up");

          // Add custom delay classes for elements within the section (optional)
          if (entry.target.classList.contains("animate-delay-section")) {
            const steps = entry.target.querySelectorAll(".animate-step");
            steps.forEach((step, index) => {
              step.classList.add(`animate__delay-${index}s`);
            });
          }
        } else {
          entry.target.classList.remove("animate-slide-up");

          // Remove delay classes when out of view
          if (entry.target.classList.contains("animate-delay-section")) {
            const steps = entry.target.querySelectorAll(".animate-step");
            steps.forEach((step) => {
              step.classList.remove(
                "animate__delay-0s",
                "animate__delay-1s",
                "animate__delay-2s"
              );
            });
          }
        }
      });
    });

    currentSections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRef = (el: HTMLElement | null, index: number) => {
    if (el) {
      // Ensure that the sectionsRef is an array before updating
      if (!sectionsRef.current) {
        sectionsRef.current = [];
      }

      // Add the element to the specified index
      sectionsRef.current[index] = el;
    }
  };

  return (
    <div>
      <section className=" flex">
        <div
          className="flex-1 bg-[#e2edf2] border h-[28rem] transition-transform duration-500 ease-in-out"
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
          }}
        >
          <div className="relative z-10 w-full h-full py-8 px-6">
            <h1 className="text-[#11385b] text-5xl font-extrabold mb-6 pt-4 animate__animated animate__fadeIn text-gradient transition-transform duration-500 ease-in-out">
              <span className=" text-5xl"> Revolutionizing </span>
              <br /> Voting with Blockchain
            </h1>
            <p className="text-[#11385b] text-2xl mb-10 animate__animated animate__fadeIn animate__delay-1s text-shadow transition-transform duration-500 ease-in-out">
              Countdown to the Next Election: {timeLeft}
            </p>
            <Link
              href="/create-account"
              className="inline-block bg-basecolour hover:bg-opacity-90 transform transition-transform duration-300 hover:scale-105 text-white py-4 px-10 rounded-full font-semibold shadow-lg animate__animated animate__fadeIn animate__delay-2s"
            >
              Register to Vote
            </Link>
          </div>
        </div>

        <div
          className="flex-1 h-[28rem] -ml-28 bg-cover bg-center transition-transform duration-500 ease-in-out"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            backgroundImage: "url('/main-hero-3.webp')",
          }}
        ></div>
      </section>
      <section className="bg-basecolour px-10 py-6 text-[#fff]">
        <div className=" flex justify-around">
          <div className=" flex flex-col items-center">
            <Image
              src={"/registered-voters.svg"}
              alt="female voters"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "54px", height: "auto" }}
            />
            <h3 className="mt-2">Registered voters</h3>
            <h3 className=" font-semibold text-2xl mt-1">21M+</h3>
          </div>
          <div className=" flex flex-col items-center">
            <Image
              src={"/total-vote-cast.svg"}
              alt="female voters"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "54px", height: "auto" }}
            />
            <h3 className="mt-2">Total vote cast</h3>
            <h3 className=" font-semibold text-2xl mt-1">20M+</h3>
          </div>
          <div className=" flex flex-col items-center">
            <Image
              src={"/total-transaction.svg"}
              alt="female voters"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "54px", height: "auto" }}
            />
            <h3 className="mt-2">Total blockchain transaction</h3>
            <h3 className=" font-semibold text-2xl mt-1">20M+</h3>
          </div>
          <div className=" flex flex-col items-center">
            <Image
              src={"/blockchain.svg"}
              alt="female voters"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "54px", height: "auto" }}
            />
            <h3 className="mt-2">Blockchain confirmation</h3>
            <h3 className=" font-semibold text-2xl mt-1">20M+</h3>
          </div>
        </div>
      </section>
      <section className="flex items-center bg-[#e2edf2] py-3">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-basecolour">Latest News</h2>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-news">
            <div className="flex-shrink-0 px-6">
              <h3 className="text-lg font-semibold text-[#11385b]">
                Election Updates
              </h3>
              <p className="text-[#11385b]">
                Blockchain voting system test successfully completed.
              </p>
            </div>
            <div className="flex-shrink-0 px-6">
              <h3 className="text-lg font-semibold text-[#11385b]">
                Voter Registration
              </h3>
              <p className="text-[#11385b]">
                New voter registration period ends on October 1st.
              </p>
            </div>
            <div className="flex-shrink-0 px-6">
              <h3 className="text-lg font-semibold text-[#11385b]">
                Security Enhancements
              </h3>
              <p className="text-[#11385b]">
                Enhanced security features implemented for election day.
              </p>
            </div>
            <div className="flex-shrink-0 px-6">
              <h3 className="text-lg font-semibold text-[#11385b]">
                Governorship Election
              </h3>
              <p className="text-[#11385b]">
                Governorship elections to be held in 5 states.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={(el) => addToRef(el, 1)}
        className="bg-white mt-10 pt-20 px-8 animate-delay-section mx-10"
      >
        <h2 className="text-basecolour text-3xl font-semibold mb-10 ps-4 text-center">
          How it works
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* <div className="bg-gray-50 p-8 rounded-lg shadow transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate-step"> */}
          <div className="flex flex-col items-center">
            <Image
              src={"/sign-up-sample.svg"}
              alt="female voters"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100px", height: "auto" }}
              priority
            />
            <h3 className="font-semibold text-lg mb-4 mt-2 ">
              Sign Up on our platform
            </h3>
            <p className="text-gray-600 text-center">
              Sign up securely on the platform using your verified credentials.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={"/vote-sample.svg"}
              alt="female voters"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100px", height: "auto" }}
              priority
            />
            <h3 className="text-lg font-semibold mb-4 mt-2">Vote seamlessly</h3>
            <p className="text-gray-600 text-center">
              Cast your vote securely using our blockchain system.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={"/track-sample.svg"}
              alt="female voters"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100px", height: "auto" }}
              priority
            />
            <h3 className="text-lg font-semibold mb-4 mt-2">Track</h3>
            <p className="text-gray-600 text-center">
              Track your vote through blockchain for transparency.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={(el) => addToRef(el, 2)}
        className=" text-[#000] mt-10 py-24 px-8 mx-20 rounded-2xl animate-fadeBg relative"
      >
        <h2 className="text-basecolour text-3xl md:text-3xl text-center mb-12  animate-fadeIn font-semibold md:mx-64 ">
          Meet Your Candidates For The 2024 Florida Gubernatorial Election
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-14 relative ">
          <div className="absolute top-0 left-0 right-0 min-h-screen bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
          {candidates.map((candidate, index) => (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <Image
                className="rounded-t-lg w-full h-48 object-cover"
                src={candidate.image}
                alt="candidate"
                width={500}
                height={300}
                sizes="100vw"
                style={{ objectPosition: "top" }}
                priority
              />

              <div className="pb-6">
                <div className="flex justify-center items-center px-3 pt-3 gap-2 ">
                  <Image
                    className="rounded-t-lg w-6 h-6 "
                    src={candidate.flag}
                    alt="candidate"
                    width={500}
                    height={300}
                    sizes="100vw"
                    priority
                  />
                  <p className="text-[#5B5F62]">{candidate.party}</p>
                </div>

                <h5 className="mb-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  {candidate.name}
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center  animate-fadeIn absolute z-10 left-0 right-0 mt-10">
          <Link
            href="/all-candidates"
            className="inline-block text-[#fff] px-4 py-2 rounded-full bg-basecolour font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            View more
          </Link>
        </div>
      </section>

      <section className=" my-10 py-24 ">
        <div className=" flex justify-center gap-14">
          <div className=" w-[80%] flex flex-col justify-center items-center px-4 ">
            <h3 className="text:xl md:text-3xl font-semibold text-basecolour">
              Featured articles and blogposts
            </h3>
            <p className=" mt-6 text-center w-[60%]">
              Our journey began with Link simple vision - to harness the
              transformative power of technology and create Link lasting impact
              on the way organizations operate and thrive in the digital age.
            </p>

            <p className="mt-6 text-center border border-basecolour rounded-lg px-4 py-3 cursor-pointer hover:text-basecolour">
              View more
            </p>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-14 mt-10">
              {articles.map((articles, index) => (
                <div
                  className="max-w-sm bg-[#E9F1F7] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pb-7"
                  key={index}
                >
                  <Image
                    className="rounded-t-lg w-full h-48 object-cover"
                    src={articles.image}
                    alt="candidate"
                    width={500}
                    height={300}
                    sizes="100vw"
                    style={{ objectPosition: "top" }}
                  />

                  <div className="">
                    <h5 className="mt-4 text-lg font-bold tracking-tight text-gray-900 dark:text-white px-3">
                      {articles.title}
                    </h5>
                    <h5 className=" text-sm p-3 tracking-tight text-gray-900 dark:text-white ">
                      {articles.body}
                    </h5>

                    <span className=" ms-3 mb-4 border-b border-b-[#3F78A4] pb-1 text-sm text-[#4F8CBC] cursor-pointer hover:text-[#437fad]">
                      learn more
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 flex flex-col items-center">
        <h3 className="text-3xl font-semibold text-basecolour w-[40%] text-center">
          Check out the live feed of election&apos;s hottest topic
        </h3>
        <p className="mt-6 w-[45%] mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit
          nisl mauris dictum. Sed auctor iaculis varius viverra in feugiat. Urna
          nec ipsum dolor sit amet consectetur.
        </p>

        <div
          id="controls-carousel"
          className="relative w-full px-14"
          data-carousel="static"
        >
          {/* Carousel wrapper */}
          <div className="relative h-96 overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}
            >
              {/* Display items */}
              {feeds.map((feed) => (
                <div key={feed.id} className="min-w-[33.3333%] p-4">
                  <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <video
                      className="rounded-t-lg w-full h-48 object-cover"
                      src={feed.video}
                      controls
                    ></video>
                    <div className="p-4">
                      <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                        {feed.title}
                      </h5>
                      <p className="text-gray-700 dark:text-gray-400">
                        {feed.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider controls */}
          {!isPrevDisabled && ( // Only show if not at the start
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handlePrev}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-800/30">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
          )}

          {!isNextDisabled && (
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handleNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-800/30">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          )}
        </div>
      </section>
      {/* Call to Action Section */}
      <section
        ref={(el) => addToRef(el, 3)}
        className=" text-black py-36 px-8 text-center bg-cover"
        style={{
          backgroundImage: "url('/call_2_action.svg')",
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#fff]">
          Make Your Voice Heard
        </h2>
        <p className="text-2xl mb-10 text-[#fff] w-[70%] mx-auto">
          Join millions of Americans in securing the future of our democracy
          with blockchain-powered voting.
        </p>
        <Link
          href="/register"
          className="bg-basecolour hover:bg-opacity-90  text-white py-4 px-10 rounded-full font-semibold transition-all shadow-lg"
        >
          Register Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-basecolour text-white py-10 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-32 ">
          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/elections" className="hover:underline">
                  Elections
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Democracy St.</p>
            <p>Capital City, CC 12345</p>
            <p>Email: info@votingsystem.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <Link href="#" className="hover:text-blue-400">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
              </Link>
              <Link href="#" className="hover:text-red-500">
                <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-100 text-sm">
          &copy; 2024 Voting System. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
