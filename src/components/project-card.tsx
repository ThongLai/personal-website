import { Github, ExternalLink, FileText, Presentation, Play, Link as LinkIcon, BookOpen, BookCopy} from "lucide-react";
import Image from "next/image";
import { ProjectType } from "@/lib/constants";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import type { ReactElement } from 'react';

interface ProjectCardProps {
  project: ProjectType;
}

interface LinkButton {
  href: string;
  icon: ReactElement;
  label: string;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const links: LinkButton[] = [
    project.github && {
      href: project.github,
      icon: <Github size={16} />,
      label: "Code"
    },
    project.reference && {
      href: project.reference,
      icon: <BookCopy size={16} />,
      label: "Reference"
    },
    project.demo && {
      href: project.demo,
      icon: <Play size={16} />,
      label: "Demo"
    },
    project.thesis && {
      href: project.thesis,
      icon: <FileText size={16} />,
      label: "Project Thesis"
    },
    project.poster && {
      href: project.poster,
      icon: <Presentation size={16} />,
      label: "Academic Poster"
    },
    project.notebook && {
      href: project.notebook,
      icon: <BookOpen size={16} />,
      label: "Notebook"
    },
    project.report && {
      href: project.report,
      icon: <ExternalLink size={16} />,
      label: "Report"
    }
  ].filter((link): link is LinkButton => Boolean(link));

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{project.title}</h3>
      </CardHeader>
      <CardContent className="grow">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 flex-wrap">
        {links.map((link) => (
          <Button
            key={link.label}
            variant={link.label === "Code" ? "outline" : "default"}
            size="sm"
            asChild
            className="gap-1"
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
              <span>{link.label}</span>
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}