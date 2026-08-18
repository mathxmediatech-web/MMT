"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Activity, Cpu } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../cards/ProjectCard";
import Button from "../ui/Button";

export default function FeaturedProjectsSection({ projects }) {
  const [activeFilter, setActiveFilter] = useState("all");

  if (!projects || !projects.items) return null;

  const filters = projects.filters || [
    { id: "all", label: "All Projects (5)" },
    { id: "running", label: "Live Systems (4)" },
    { id: "ongoing", label: "Active Builds (1)" },
  ];

  const filteredProjects = projects.items.filter((item) => {
    if (activeFilter === "running") return item.status === "Running";
    if (activeFilter === "ongoing") return item.status === "Ongoing";
    return true;
  });

  return (
    <section id="projects" className="py-12 sm:py-16 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={projects.section_badge || "Proven Execution"}
          badgeIcon="Layers"
          title={projects.section_title || "Active Projects & Case Studies"}
          description={
            projects.section_description ||
            "Explore our real-world software products and client builds — live EdTech platforms, digital whiteboard software, restaurant operating systems, service worker marketplaces, and gym automation suites."
          }
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-blue-500 text-white shadow-blue-sm"
                  : "bg-white text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-slate-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects Action */}
        <div className="mt-14 text-center">
          <Button href="/projects" variant="primary" size="md" icon="ArrowRight">
            Explore All Project Case Studies & Architecture
          </Button>
        </div>
      </div>
    </section>
  );
}
