import { motion } from "framer-motion";
import { 
  Code, 
  Globe, 
  Smartphone, 
  Palette, 
  Layers, 
  Server, 
  Gauge 
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built from the ground up to meet your unique business requirements.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Fast, responsive web applications using modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that deliver seamless user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design & Prototyping",
    description: "User-centered design that transforms complex workflows into intuitive interfaces.",
  },
  {
    icon: Layers,
    title: "Product Design Systems",
    description: "Scalable design systems that ensure consistency across all your digital products.",
  },
  {
    icon: Server,
    title: "API & Backend Development",
    description: "Robust, secure APIs and backend systems that power your applications.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Speed and efficiency improvements that keep your users engaged and satisfied.",
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 md:p-8 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover hover:border-primary/30 transition-all duration-300"
    >
      <div className="p-3 rounded-xl bg-primary/10 w-fit mb-5 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold font-heading mb-3 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="full-section relative" id="services">
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
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mt-4 leading-tight">
              End-to-End <span className="text-gradient">Digital Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              From concept to launch, we provide comprehensive services to bring your 
              digital vision to life.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
