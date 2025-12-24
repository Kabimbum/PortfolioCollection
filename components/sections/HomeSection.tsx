"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";

import {
  SiLaravel,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { HiMail } from "react-icons/hi";

const hoverBlur =
  "transition duration-300 hover:blur-[1px] cursor-default";

export default function HomeSection() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 🔑 trigger animasi ulang saat hash / refresh
  const motionKey = `${pathname}-${searchParams.toString()}`;

  return (
    <motion.section
      key={motionKey}
      id="home"
      className="min-h-screen flex items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 items-center gap-20">

          {/* LEFT CONTENT */}
          <div>
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 ${hoverBlur}`}
            >
              Software Engineer
            </h1>

            <p
              className={`text-gray-600 max-w-xl mb-8 leading-relaxed ${hoverBlur}`}
            >
              I am Muhammad Gibran, an Informatics Engineering student who enjoys
              building web applications, backend systems, and UI
              experiences with clean and scalable code.
            </p>

            {/* ACTIONS */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <a
                href="/CV Muhammad-Gibran-Hakim-SE.pdf"
                download
                className="px-6 py-3 border border-white text-sm hover:bg-black hover:text-white transition"
              >
                Download Resume
              </a>

              <a
                href="https://github.com/Kabimbum"
                target="_blank"
                className={`text-2xl text-gray-600 hover:text-black ${hoverBlur}`}
              >
                <SiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-gibran-hakim-735840295/"
                target="_blank"
                className={`text-2xl text-gray-600 hover:text-black ${hoverBlur}`}
              >
                <SiLinkedin />
              </a>

              <a
                href="mailto:gibranhakim127@gmail.com"
                className={`text-2xl text-gray-600 hover:text-black ${hoverBlur}`}
              >
                <HiMail />
              </a>
            </div>

            {/* TECH STACK */}
            <div>
              <p className={`text-sm font-semibold mb-4 ${hoverBlur}`}>
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-6 text-3xl text-gray-600">
                <SiLaravel className={hoverBlur} />
                <SiTailwindcss className={hoverBlur} />
                <SiBootstrap className={hoverBlur} />
                <SiNodedotjs className={hoverBlur} />
                <SiNextdotjs className={hoverBlur} />
                <SiReact className={hoverBlur} />
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* spotlight */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 blur-3xl transition duration-500" />

              <Image
                src="/profile.jpeg"
                alt="Muhammad Gibran"
                width={420}
                height={420}
                priority
                className="rounded-full object-cover shadow-2xl relative z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
