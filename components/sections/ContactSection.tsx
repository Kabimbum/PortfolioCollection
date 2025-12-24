"use client";

import Image from "next/image";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { SiInstagram } from "react-icons/si";

const hoverBlur =
  "transition duration-300 hover:blur-[1px] cursor-default";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 md:py-40"
    >
      <div className="w-full max-w-5xl mx-auto px-8 md:px-14">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <p
              className={`text-sm uppercase tracking-widest text-gray-500 mb-4 ${hoverBlur}`}
            >
              Contact
            </p>

            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${hoverBlur}`}
            >
              Get in touch
            </h2>

            <p
              className={`text-gray-600 max-w-sm mb-10 leading-relaxed mx-auto md:mx-0 ${hoverBlur}`}
            >
              If you have any questions or inquiries, please don&apos;t hesitate
              to contact me.
            </p>

            <div className="space-y-5 text-gray-600">

              <div className={`flex items-center justify-center md:justify-start gap-4 ${hoverBlur}`}>
                <HiMail className="text-xl" />
                <a
                  href="mailto:gibranhakim127@gmail.com"
                  className="hover:text-black transition"
                >
                  gibranhakim127@gmail.com
                </a>
              </div>

              <div className={`flex items-center justify-center md:justify-start gap-4 ${hoverBlur}`}>
                <SiInstagram className="text-xl" />
                <a
                  href="https://instagram.com/giigibran"
                  target="_blank"
                  className="hover:text-black transition"
                >
                  @giigibran
                </a>
              </div>

              <div className={`flex items-center justify-center md:justify-start gap-4 ${hoverBlur}`}>
                <HiLocationMarker className="text-xl" />
                <span>Tangerang, Banten, Indonesia</span>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:flex justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden">
              <Image
                src="/contactlogo.png"
                alt="Contact visual"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
