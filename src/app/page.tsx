"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Navbar from "./component/navbar/navbar";
import "../lib/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "animate.css";

// Example candidate data
const candidates = [
  {
    id: 1,
    name: "John Doe",
    position: "President",
    image: "/president-1.jpg",
  },
  {
    id: 2,
    name: "Alice Johnson",
    position: "President",
    image: "/president-2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "Governor",
    image: "/governor-1.jpg",
  },
  {
    id: 4,
    name: "Mark Robinson",
    position: "Governor",
    image: "/governor-2.avif",
  },
  {
    id: 4,
    name: "Juliet Elianza",
    position: "Governor",
    image: "/governor-3.avif",
  },
];

// Example news data
const news = [
  {
    id: 1,
    title: "Election Day Announced",
    content:
      "The next election day is scheduled for November 5th, 2024. Make sure you&apos;re prepared!",
    link: "#",
  },
  {
    id: 2,
    title: "New Voting Regulations",
    content:
      "New regulations have been introduced to enhance the security and transparency of the voting process.",
    link: "#",
  },
  {
    id: 3,
    title: "Candidate Profiles Released",
    content:
      "Profiles of all candidates for the upcoming election have been released. Check them out to make an informed decision.",
    link: "#",
  },
];

const newsUpdates = [
  {
    id: 1,
    title: "Key Dates for the Upcoming Presidential Election",
    description:
      "Stay updated on key dates such as voter registration deadlines, debate schedules, and election day.",
    image: "/election-news1.jpg",
    link: "/news/key-dates",
  },
  {
    id: 2,
    title: "Governor Candidates' Debate Highlights",
    description:
      "Catch up on the latest governor candidates' debate and see where each candidate stands on major issues.",
    image: "/election-news2.jpg",
    link: "/news/debate-highlights",
  },
  {
    id: 3,
    title: "How Blockchain Technology is Securing this Election",
    description:
      "Explore how blockchain ensures election security and transparency, protecting voters and their data.",
    image: "/election-news3.jpg",
    link: "/news/blockchain-security",
  },
  {
    id: 4,
    title: "Voter Safety and COVID-19 Guidelines",
    description:
      "Learn about safety measures being implemented during the election to keep voters protected.",
    image: "/election-news4.jpg",
    link: "/news/voter-safety",
  },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 7000; // Slide interval in milliseconds

  // Function to manually change slides
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsUpdates.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + newsUpdates.length) % newsUpdates.length
    );
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide(); // Move to the next slide every few seconds
    }, slideInterval);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

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

        // If there's no next sibling, go back to the first slide
        if (!nextSlide) {
          nextSlide = document.querySelector(
            ".carousel-item:first-child"
          ) as HTMLElement;
        }

        // Remove the 'active' class from the current slide
        activeSlide.classList.remove("active");

        // Add the 'active' class to the next slide
        nextSlide?.classList.add("active");
      }
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // IntersectionObserver for detecting sections in view and adding animation
  useEffect(() => {
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

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRef = (el: HTMLElement | null, index: number) => {
    if (el && !sectionsRef.current.includes(el)) {
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
            <h1 className="text-[#11385b] text-4xl font-extrabold mb-6 pt-4 animate__animated animate__fadeIn text-gradient transition-transform duration-500 ease-in-out">
              Revolutionizing Voting with Blockchain
            </h1>
            <p className="text-[#11385b] text-2xl mb-10 animate__animated animate__fadeIn animate__delay-1s text-shadow transition-transform duration-500 ease-in-out">
              Countdown to the Next Election: {timeLeft}
            </p>
            <Link
              href="/register"
              className="inline-block bg-blue-900 hover:bg-blue-950 transform transition-transform duration-300 hover:scale-105 text-white py-4 px-10 rounded-full font-semibold shadow-lg animate__animated animate__fadeIn animate__delay-2s"
            >
              Register to Vote
            </Link>
          </div>
        </div>

        <div
          className="flex-1 h-[28rem] -ml-28 bg-cover bg-center transition-transform duration-500 ease-in-out"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            backgroundImage: "url('/hero.jpg')",
          }}
        ></div>
      </section>

      <section className="relative pb-16 bg-gray-100 mb-24">
        <section>
          <div className="container mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              {/* Total Registered Voters */}
              <div className=" flex flex-col justify-center p-6 w-full md:w-1/3">
                <img
                  src={"/registered_voters_icon.png"}
                  alt="registered voters"
                  className=" mx-auto  h-24 object-cover"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Registered Voters
                </h3>
                <p className="text-4xl font-bold text-[#11385b]">27,672,264</p>
              </div>

              {/* Female Voters */}
              <div className=" flex flex-col justify-center p-6 w-full md:w-1/3">
                <img
                  src={"/female_icon.png"}
                  alt="female voters"
                  className=" mx-auto  h-20 object-cover"
                />
                <h3 className="text-xl font-semibold mb-4">Female</h3>
                <p className="text-4xl font-bold text-pink-500">55.25%</p>
              </div>

              {/* Male Voters */}
              <div className=" flex flex-col justify-center p-6 w-full md:w-1/3">
                <img
                  src={"/male_icon.png"}
                  alt="male voters"
                  className=" mx-auto  h-24 object-cover"
                />
                <h3 className="text-xl font-semibold mb-4">Male</h3>
                <p className="text-4xl font-bold text-green-800">44.75%</p>
              </div>
            </div>
          </div>
        </section>
        <section className="absolute -bottom-20 z-10 px-8">
          <div className="carousel w-full relative overflow-hidden">
            <div
              className="carousel-track flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsUpdates.map((news) => (
                <div
                  key={news.id}
                  className="carousel-item w-full h-32 flex-shrink-0"
                >
                  <div className="w-full text-gray-900 items-center justify-center text-center p-6 bg-[#e2edf2] rounded shadow-lg">
                    <h3 className="text-2xl font-semibold text-[#11385b]">
                      {news.title}
                    </h3>
                    <p className="mt-2">{news.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={handlePreviousSlide}
                className="btn btn-circle bg-gray-100"
              >
                ❮
              </button>
              <button
                onClick={handleNextSlide}
                className="btn btn-circle bg-gray-100"
              >
                ❯
              </button>
            </div>
          </div>
        </section>
      </section>

      <section
        ref={(el) => addToRef(el, 1)}
        className="bg-white pt-10 pb-20 px-8 animate-delay-section"
      >
        <h2 className="text-[#11385b] text-3xl font-bold mb-10 ps-4">
          Step-by-Step Guide to Secure Voting
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate-step">
            <h3 className="text-2xl font-bold mb-4 text-[#005ea2]">
              Step 1: Register
            </h3>
            <p className="text-gray-600">
              Sign up securely on the platform using your verified credentials.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate-step">
            <h3 className="text-2xl font-bold mb-4 text-[#005ea2]">
              Step 2: Vote
            </h3>
            <p className="text-gray-600">
              Cast your vote securely using our blockchain system.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate-step">
            <h3 className="text-2xl font-bold mb-4 text-[#005ea2]">
              Step 3: Track
            </h3>
            <p className="text-gray-600">
              Track your vote through blockchain for transparency.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={(el) => addToRef(el, 2)}
        className="bg-gray-100 text-[#000] py-20 px-8"
      >
        <h2 className="text-[#11385b] text-3xl md:text-4xl font-bold mb-12 ps-4 text-left  animate-fadeIn">
          Meet the Candidates
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Map through the candidates dynamically */}
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 animate-fadeInUp"
            >
              <img
                src={candidate.image}
                alt={`${candidate.name} - ${candidate.position}`}
                className="mb-4 rounded-full mx-auto w-32 h-32 object-cover"
              />
              <h3 className="text-2xl font-bold mb-4 text-center">
                {candidate.name}
              </h3>
              <p className="text-lg mb-4 text-center">
                Running for {candidate.position}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fadeIn">
          <a
            href="/all-candidates"
            className="inline-block bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-10 rounded-full  transition-colors duration-300"
          >
            See all candidates
          </a>
        </div>
      </section>

      <section className=" my-6 px-10 ">
        <div className=" flex justify-center gap-14">
          <div className=" w-[58%] flex flex-col justify-center items-center px-4 ">
            <h3 className="text-3xl font-semibold">Latest News And Updates</h3>
            <p className=" mt-8">
              Our journey began with a simple vision - to harness the
              transformative power of technology and create a lasting impact on
              the way organizations operate and thrive in the digital age.
              Founded in year.
            </p>
            <div className=" mt-10">
              <button className="border rounded-lg px-6 py-4">View more</button>
            </div>
          </div>

          <div className="p-2 rounded-xl w-[349px] bg-[#E9F1F7]">
            <div className="flex justify-center">
              <img src="/sample_img_1.svg" alt="" className=" w-[326px]" />
            </div>
            <h3 className="mt-4 font-semibold px-2">Lorem ipsum dolor sit</h3>
            <p className=" mb-6 mt-3 text-sm px-2">
              Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non
              sit nisl mauris dictum. Sed auctor iaculis varius viverra in
              feugiat.Urna nec ipsum dolor sit amet consectetur.{" "}
            </p>
            <Link href={"/"}>
              <p className=" mb-10 ms-2 inline-block border-b border-blue-300 pb-1">
                learn more
              </p>
            </Link>
          </div>
        </div>
        <div className=" flex gap-7 justify-center flex-wrap mt-6 ">
          <div className="p-2 rounded-xl w-[349px] bg-[#E9F1F7]">
            <div className="flex justify-center">
              <img src="/sample_img_1.svg" alt="" className=" w-[326px]" />
            </div>
            <h3 className="mt-4 font-semibold px-2">Lorem ipsum dolor sit</h3>
            <p className=" mb-6 mt-3 text-sm px-2">
              Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non
              sit nisl mauris dictum. Sed auctor iaculis varius viverra in
              feugiat.Urna nec ipsum dolor sit amet consectetur.{" "}
            </p>
            <Link href={"/"}>
              <p className=" mb-10 ms-2 inline-block border-b border-blue-300 pb-1">
                learn more
              </p>
            </Link>
          </div>
          <div className="p-2 rounded-xl w-[349px] bg-[#E9F1F7]">
            <div className="flex justify-center">
              <img src="/sample_img_1.svg" alt="" className=" w-[326px]" />
            </div>
            <h3 className="mt-4 font-semibold px-2">Lorem ipsum dolor sit</h3>
            <p className=" mb-6 mt-3 text-sm px-2">
              Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non
              sit nisl mauris dictum. Sed auctor iaculis varius viverra in
              feugiat.Urna nec ipsum dolor sit amet consectetur.{" "}
            </p>
            <Link href={"/"}>
              <p className=" mb-10 ms-2 inline-block border-b border-blue-300 pb-1">
                learn more
              </p>
            </Link>
          </div>

          <div className="p-2 rounded-xl w-[349px] bg-[#E9F1F7]">
            <div className="flex justify-center">
              <img src="/sample_img_1.svg" alt="" className=" w-[326px]" />
            </div>
            <h3 className="mt-4 font-semibold px-2">Lorem ipsum dolor sit</h3>
            <p className=" mb-6 mt-3 text-sm px-2">
              Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non
              sit nisl mauris dictum. Sed auctor iaculis varius viverra in
              feugiat.Urna nec ipsum dolor sit amet consectetur.{" "}
            </p>
            <Link href={"/"}>
              <p className=" mb-10 ms-2 inline-block border-b border-blue-300 pb-1">
                learn more
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="my-10 flex flex-col items-center">
        <h3 className=" text-3xl font-semibold">check out live feed of election&apos;s hottest topic</h3>
        <p className=" mt-6 w-[60%] text-center">
          Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit
          nisl mauris dictum. Sed auctor iaculis varius viverra in feugiat.Urna
          nec ipsum dolor sit amet consectetur.{" "}
        </p>
        <div className=" flex flex-wrap gap-10 mt-10">
          <div className="p-2 rounded-xl w-[250px] bg-[#E9F1F7]">
            <div className="flex justify-center">
              <img src="/sample_img_1.svg" alt="" className=" w-[326px]" />
            </div>
            <p className="mt-2 px-2">1.3M+ Views . 1 day ago</p>
            <p className=" mt-2 px-2 font-semibold">Zap media house</p>
          </div>
          <div className="p-2 rounded-xl w-[250px] bg-[#E9F1F7]">
            <div className="flex justify-center">
              <img src="/sample_img_1.svg" alt="" className=" w-[326px]" />
            </div>
            <p>1.3M+ Views . 1 day ago</p>
            <p>Zap media house</p>
          </div>
          <div className="p-2 rounded-xl w-[250px] bg-[#E9F1F7]">
            <div className="flex justify-center">
              <img src="/sample_img_1.svg" alt="" className=" w-[326px]" />
            </div>
            <p>1.3M+ Views . 1 day ago</p>
            <p>Zap media house</p>
          </div>
          <div className="p-2 rounded-xl w-[250px] bg-[#E9F1F7]">
            <div className="flex justify-center">
              <img src="/sample_img_1.svg" alt="" className=" w-[326px]" />
            </div>
            <p>1.3M+ Views . 1 day ago</p>
            <p>Zap media house</p>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section
        ref={(el) => addToRef(el, 3)}
        className=" text-black py-20 px-8 text-center"
        style={{
          backgroundImage: "url('/call_2_action.svg')",
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#fff]">
          Make Your Voice Heard
        </h2>
        <p className="text-2xl mb-10 text-[#fff]">
          Join millions of Americans in securing the future of our democracy
          with blockchain-powered voting.
        </p>
        <Link
          href="/register"
          className="bg-blue-900 hover:bg-blue-950  text-white py-4 px-10 rounded-full font-semibold transition-all shadow-lg"
        >
          Register Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-8">
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
              <a href="#" className="hover:text-blue-400">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
              </a>
              <a href="#" className="hover:text-red-500">
                <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          &copy; 2024 Voting System. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
