import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Tom</h3>
            <p className="text-muted-foreground max-w-xs">
              Building innovative solutions with a focus on AI, machine learning,
              and modern technological products.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-primary transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-muted-foreground">
              laiminhthong1@gmail.com<br/>
              U2259343@unimail.hud.ac.uk
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} Thong Minh Lai (Tom). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}