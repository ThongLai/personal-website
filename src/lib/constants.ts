export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
};

export type SkillType = {
  name: string;
  icon: string;
};

export const SKILLS: SkillType[] = [
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Python", icon: "logos:python" },
  { name: "TensorFlow", icon: "logos:tensorflow" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
];

export const PROJECTS: ProjectType[] = [
  {
    title: "AI-Powered Recommendation Engine",
    description: "Built a recommendation system using deep learning to provide personalized content suggestions based on user behavior and preferences.",
    tags: ["Python", "TensorFlow", "React", "Node.js"],
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com",
    link: "https://project-demo.com",
  },
  {
    title: "Real-time Data Visualization Dashboard",
    description: "Developed an interactive dashboard to visualize complex data sets in real-time, enabling quicker and more informed business decisions.",
    tags: ["React", "D3.js", "Socket.io", "Express"],
    image: "https://images.pexels.com/photos/14936126/pexels-photo-14936126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com",
  },
  {
    title: "Natural Language Processing API",
    description: "Created a robust API for text analysis, sentiment detection, and language translation using state-of-the-art NLP models.",
    tags: ["Python", "Flask", "BERT", "Docker"],
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com",
    link: "https://api-docs.example.com",
  },
];

export const BLOG_POSTS = [
  {
    title: "Building Explainable AI Systems",
    excerpt: "How to create AI systems that not only perform well but also explain their decision-making process.",
    date: "2024-04-15",
    slug: "building-explainable-ai-systems",
  },
  {
    title: "The Future of Web Development with React Server Components",
    excerpt: "Exploring how React Server Components are changing the way we build web applications.",
    date: "2024-03-21",
    slug: "future-of-web-development-react-server-components",
  },
  {
    title: "Optimizing Deep Learning Models for Production",
    excerpt: "Best practices for deploying efficient and performant deep learning models in production environments.",
    date: "2024-02-08",
    slug: "optimizing-deep-learning-models-for-production",
  },
];