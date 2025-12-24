"use client";

import { useState } from "react";
import { projects } from "@/app/data/project";

const hoverBlur =
  "transition duration-300 hover:blur-[1px]";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-8 md:px-14">
        <h2
          className={`text-4xl font-bold mb-20 ${hoverBlur}`}
        >
          Projects
        </h2>

        <div className="space-y-28">
          {projects.map((group, idx) => (
            <ProjectCategory key={idx} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}


function ProjectCategory({ group }: any) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-10">
        {group.category}
      </h3>

      <div className="grid md:grid-cols-2 gap-12">
        {group.items.map((item: any, idx: number) => (
          <ProjectCard key={idx} project={item} />
        ))}
      </div>
    </div>
  );
}


function ProjectCard({ project }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer border border-gray-200 rounded-2xl p-7 hover:border-black transition"
    >
      {/* HEADER */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h4
            className={`text-lg font-semibold mb-1 ${hoverBlur}`}
          >
            {project.title}
          </h4>
          <p className="text-sm text-gray-500">
            {project.role}
          </p>
        </div>

        <span className="text-xs text-gray-400">
          {project.period}
        </span>
      </div>

      {/* SHORT DESC */}
      <p
        className={`text-gray-600 text-sm leading-relaxed ${hoverBlur}`}
      >
        {project.description}
      </p>

      {/* EXPAND */}
      {open && (
        <div className="mt-7 space-y-6 animate-fadeIn">
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            {project.details.map(
              (detail: string, i: number) => (
                <li key={i}>{detail}</li>
              )
            )}
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map(
              (tech: string, i: number) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 border border-gray-300 rounded-full text-gray-500"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
