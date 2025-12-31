import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProcessStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    step: "01",
    title: "Discover & Plan",
    description: "We dive deep into understanding your business goals, user needs, and technical requirements to create a solid foundation.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Prototype",
    description: "We craft intuitive interfaces and interactive prototypes that bring your vision to life before development begins.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build & Iterate",
    description: "Our development team builds your product using agile methodologies, with regular feedback loops and iterations.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support to help your product grow and evolve over time.",
  },
];

const ProcessSection = () => {
  return (
    <section className="full-section relative" id="process">
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
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mt-4 leading-tight">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              A proven process that ensures quality, efficiency, and alignment 
              with your business objectives.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent z-0" />
                  )}

                  <div className="relative z-10">
                    {/* Step Number */}
                    <span className="text-6xl font-bold font-heading text-muted/30 absolute -top-4 -left-2">
                      {step.step}
                    </span>

                    {/* Icon */}
                    <div className="relative p-3 rounded-xl bg-primary/10 w-fit mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold font-heading mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
