import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { ProjectType } from "@/lib/constants";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface ProjectCardProps {
  project: ProjectType;
}

export function ProjectCard({ project }: ProjectCardProps) {
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
      <CardFooter className="flex justify-start gap-2">
        {project.github && (
          <Button variant="outline" size="sm" asChild className="gap-1">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
        )}
        {project.link && (
          <Button variant="default" size="sm" asChild className="gap-1">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}