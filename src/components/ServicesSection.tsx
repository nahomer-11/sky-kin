import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  Layers,
  Server,
  Gauge,
  Cpu,
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
    description:
      "Design and development of scalable, secure, and tailor-made software solutions aligned with business needs.",
  },
  {
    icon: Globe,
    title: "Digital Transformation & IT Consulting",
    description:
      "Strategic guidance and technology consulting to modernize operations and accelerate digital adoption.",
  },
  {
    icon: Smartphone,
    title: "Telecom Solutions",
    description:
      "Advanced technology solutions supporting telecommunications infrastructure, platforms, and services.",
  },
  {
    icon: Layers,
    title: "Hospitality & Tourism Solutions",
    description:
      "Digital systems that enhance guest experiences, operational efficiency, and service delivery.",
  },
  {
    icon: Cpu,
    title: "Agriculture Technology",
    description:
      "Innovative digital tools that support smart agriculture, productivity, and data-driven decision-making.",
  },
  {
    icon: Server,
    title: "Health & Medical Solutions",
    description:
      "Technology-driven healthcare solutions that improve accessibility, efficiency, and patient outcomes.",
  },
  {
    icon: Gauge,
    title: "Smart Cities & IoT Solutions",
    description:
      "Connected systems and IoT solutions designed to support smart infrastructure and sustainable urban growth.",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
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
            className="text-center max-w-3xl mx-auto"
          >
            {/* BIG, PROMINENT "What We Offer" */}
<span className="block text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold uppercase text-primary tracking-wide mb-3">
  What We Offer
</span>



            <p className="text-muted-foreground text-lg mt-5">
              We deliver end-to-end digital solutions that empower industries,
              enhance experiences, and support Ethiopia’s digital growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
