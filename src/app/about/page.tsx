import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section>
        <div className="bg-[#e2edf2] border h-[12rem] flex flex-col justify-center">
          <h3 className=" font-semibold text-4xl ps-4">About Us</h3>
        </div>
      </section>
      <section className="grid grid-cols-2 mt-8">
        <div className="px-4">
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-700">
            The Election Commission is an independent body committed to
            conducting free, fair, and transparent elections. Our mission is to
            safeguard the democratic process by implementing cutting-edge
            blockchain technology to ensure the security and integrity of every
            vote cast.
          </p>
        </div>
        <div></div>
      </section>

      <section className="grid grid-cols-2 mt-8">
        <div className="px-4">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700">
            To provide a transparent, secure, and efficient voting platform that
            upholds the democratic process and empowers citizens to participate
            in shaping their future.
          </p>
        </div>
        <div></div>
      </section>
      <section className="grid grid-cols-2 mt-8">
        <div className="px-4">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-700">
            To be the leading digital voting platform, revolutionizing the way
            citizens engage in elections with trust, transparency, and ease of
            access.
          </p>
        </div>
        <div></div>
      </section>
      <section className="bg-white py-16 px-8 text-[#11385b]">
        <div className="container mx-auto">
          {/* Overview of the Election Commission */}

          {/* Mission, Vision, and Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Integrity: Ensuring the security and accuracy of all votes.
                </li>
                <li>
                  Transparency: Providing open access to voting data and
                  processes.
                </li>
                <li>
                  Inclusivity: Creating an accessible platform for all eligible
                  citizens, regardless of background.
                </li>
                <li>
                  Innovation: Leveraging blockchain technology to enhance the
                  election process.
                </li>
              </ul>
            </div>
          </div>

          {/* History and Governance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                History of Elections
              </h3>
              <p className="text-gray-700">
                Our journey began with a vision to transform how elections are
                conducted. Over the years, we’ve implemented numerous
                innovations, from digital voter registration to blockchain-based
                voting, ensuring that the process remains modern, secure, and
                inclusive.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Governance and Structure
              </h3>
              <p className="text-gray-700">
                The Election Commission is governed by a diverse board of
                stakeholders, including representatives from government
                agencies, civil society organizations, and cybersecurity
                experts. We operate under strict regulatory frameworks to ensure
                accountability and fairness in every election.
              </p>
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
            <p className="text-gray-700 mb-4">
              Our team comprises dedicated professionals with expertise in
              blockchain technology, electoral processes, cybersecurity, and
              public policy. They work tirelessly to ensure that every election
              conducted through our platform is seamless and secure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Image
                  src="/team-member-1.jpg"
                  alt="Team Member"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "40px", height: "auto" }}
                />
                <h4 className="text-lg font-semibold">Jane Doe</h4>
                <p className="text-gray-500">CEO & Founder</p>
              </div>
              <div className="text-center">
                <Image
                  src="/team-member-2.jpg"
                  alt="Team Member"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "40px", height: "auto" }}
                />
                <h4 className="text-lg font-semibold">John Smith</h4>
                <p className="text-gray-500">Chief Technology Officer</p>
              </div>
              <div className="text-center">
                <Image
                  src="/team-member-3.jpg"
                  alt="Team Member"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "40px", height: "auto" }}
                />
                <h4 className="text-lg font-semibold">Sarah Lee</h4>
                <p className="text-gray-500">Head of Operations</p>
              </div>
            </div>
          </div>

          {/* Partnerships & Stakeholders */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-4">
              Partnerships & Stakeholders
            </h3>
            <p className="text-gray-700">
              Our platform is built on collaboration with various stakeholders,
              including government bodies, NGOs, and tech partners. These
              partnerships ensure that we maintain the highest standards of
              security, accessibility, and innovation in our electoral
              processes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <Image
                src="/partner-logo-1.png"
                alt="Partner Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "20px", height: "auto" }}
              />
              <Image
                src="/partner-logo-2.png"
                alt="Partner Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "20px", height: "auto" }}
              />
              <Image
                src="/partner-logo-3.png"
                alt="Partner Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "20px", height: "auto" }}
              />
              <Image
                src="/partner-logo-4.png"
                alt="Partner Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "20px", height: "auto" }}
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-semibold mb-4">
              Join Us in Shaping the Future of Democracy
            </h3>
            <p className="text-gray-700 mb-8">
              Be a part of the revolution. Whether you&apos;re a voter, a
              volunteer, or a partner, your involvement makes a difference.
              Together, we can ensure that every vote is secure, transparent,
              and counted.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
