import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { ProjectCard } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";
import { PROJECTS, BLOG_POSTS, SKILLS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom</title>
        <meta name="description" content="Tom's Personal portfolio website showcasing his projects and skills in AI/ML, and products." />
      </Head>
      <div>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-linear-to-b from-primary/10 to-background">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block">Thong Minh Lai (Tom)</span>
                  <span className="text-primary">AI-something-related</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  I build machine things.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button asChild size="lg">
                    <Link href="/projects">View My Work</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
                  <div className="absolute inset-0 border-4 border-primary rounded-full"></div>
                  <div className="absolute inset-2 bg-muted rounded-full overflow-hidden">
                    <Image
                      src="https://raw.githubusercontent.com/ThongLai/personal-website/main/public/images/profiles/profile_pic_tree.jpg"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 border-t">
          <div className="container">
            <SectionTitle
              title="Skills & Technologies"
              subtitle="The tools and technologies I use to bring ideas to life"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2">
                  <div className="h-16 w-16 flex items-center justify-center">
                    <svg className="h-16 w-16">
                      <image href={`https://api.iconify.design/${skill.icon}.svg`} height="64" width="64" />
                    </svg>
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <SectionTitle
              title="Featured Projects"
              subtitle="Some of my recent work"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.slice(0, 3).map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-20">
          <div className="container">
            <SectionTitle
              title="My Random Things"
              subtitle="Thoughts, insights, and technical blogs"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/blog">Read All Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground">
                I'm currently available for freelance work and collaboration opportunities.
                If you have a project in mind or just want to chat, feel free to reach out!
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}