import Head from 'next/head';
import { SectionTitle } from "@/components/ui/section-title";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Tom</title>
        <meta name="description" content="A showcase of my work and contributions" />
      </Head>
      <div className="container py-12 md:py-20">
        <SectionTitle 
          title="My Projects" 
          subtitle="A showcase of my work and contributions"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}