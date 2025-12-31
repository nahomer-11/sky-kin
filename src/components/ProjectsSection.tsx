import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: "FinFlow Dashboard",
    description: "A comprehensive financial management platform with real-time analytics and intuitive data visualization.",
    tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
    image: "linear-gradient(135deg, hsl(200 90% 20%) 0%, hsl(220 80% 30%) 100%)",
  },
  {
    title: "MediCare Mobile",
    description: "Cross-platform healthcare app connecting patients with providers through secure messaging and appointments.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: "linear-gradient(135deg, hsl(160 60% 20%) 0%, hsl(180 70% 25%) 100%)",
  },
  {
    title: "RetailX Platform",
    description: "Enterprise e-commerce solution with advanced inventory management and omnichannel capabilities.",
    tags: ["Next.js", "GraphQL", "AWS", "Stripe"],
    image: "linear-gradient(135deg, hsl(280 60% 25%) 0%, hsl(300 50% 30%) 100%)",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="rounded-2xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all duration-300">
        {/* Project Image/Preview */}
        <div 
          className="h-48 md:h-56 relative overflow-hidden"
          style={{ background: project.image }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-background/80 backdrop-blur-sm text-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 bg-card">
          <h3 className="text-xl font-semibold font-heading mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-5">
            {project.description}
          </p>
          <Button variant="outline" size="sm" className="group/btn">
            View Project
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="full-section relative" id="projects">
      <div className="section-container w-full">
        <div className="space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* BIG Our Work */}
<span className="block text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold uppercase text-primary tracking-wide mb-3">
  Our Work
</span>


            <p className="text-muted-foreground text-lg mt-4">
              A glimpse into some of our recent work and the impact we've delivered 
              for our clients.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
