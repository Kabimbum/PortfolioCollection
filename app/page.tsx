"use client";

import { useState } from "react";
import IntroAnimation from "../components/IntroAnimation";
import HomeSection from "../components/sections/HomeSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSections";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
      {introDone && (
        <main className="relative">
          <HomeSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      )}
    </>
  );
}
