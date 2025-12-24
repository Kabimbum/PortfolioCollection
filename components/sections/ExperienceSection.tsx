"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const hoverBlur = "transition duration-300 hover:blur-[1px]";

const MotionCard = motion.div;

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-semibold mb-12">Experience</h2>

        <div className="space-y-10">

          {/* EXPERIENCE 1 */}
          <MotionCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-xl p-8 flex flex-col md:flex-row gap-6 hover:border-black transition"
          >
            {/* LOGO */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
                <Image
                  src="/imageputih.png"
                  alt="Company Logo"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <p className={`text-sm text-gray-500 mb-1 ${hoverBlur}`}>
                Jan 2025 – Jul 2025
              </p>

              <h3 className={`text-lg font-semibold mb-1 ${hoverBlur}`}>
                Chief Nothing Officer
              </h3>

              <p className={`text-sm text-gray-600 mb-4 ${hoverBlur}`}>
                Self-employed • Full-time
              </p>

              <p className={`text-gray-600 leading-relaxed mb-4 ${hoverBlur}`}>
                As a Chief Nothing Officer, I was responsible for maintaining
                strategic inactivity while ensuring optimal productivity through
                deliberate non-action.
              </p>

              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li className={hoverBlur}>
                  Avoided unnecessary meetings and distractions.
                </li>
                <li className={hoverBlur}>
                  Maintained focus under high-pressure idle situations.
                </li>
                <li className={hoverBlur}>
                  Delivered consistent results by doing absolutely nothing.
                </li>
              </ul>
            </div>
          </MotionCard>

          {/* EXPERIENCE 2 */}
          <MotionCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-xl p-8 flex flex-col md:flex-row gap-6 hover:border-black transition"
          >
            {/* LOGO */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
                <Image
                  src="/logoesgul1.png"
                  alt="Universitas Esa Unggul"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <p className={`text-sm text-gray-500 mb-1 ${hoverBlur}`}>
                2023 – Present
              </p>

              <h3 className={`text-lg font-semibold mb-1 ${hoverBlur}`}>
                Computer Science Student
              </h3>

              <p className={`text-sm text-gray-600 mb-4 ${hoverBlur}`}>
                Universitas Esa Unggul
              </p>

              <p className={`text-gray-600 leading-relaxed mb-4 ${hoverBlur}`}>
                Pursuing a Bachelor’s degree in Computer Science with a strong
                interest in software engineering, web development, and applied
                problem-solving.
              </p>

              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li className={hoverBlur}>
                  Studied algorithms, databases, and software engineering.
                </li>
                <li className={hoverBlur}>
                  Built academic and personal web-based projects.
                </li>
                <li className={hoverBlur}>
                  Actively involved in collaborative technical work.
                </li>
              </ul>
            </div>
          </MotionCard>

        </div>
      </div>
    </section>
  );
}
