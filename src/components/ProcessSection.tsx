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
    description: "We dive deep into understanding your business goals, user needs, and technical requirements.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Prototype",
    description: "We craft intuitive interfaces and interactive prototypes that bring your vision to life.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build & Iterate",
    description: "Our development team builds your product using agile methodologies and regular feedback.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support to help your product grow.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
<span className="block text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold uppercase text-primary tracking-wide mb-3">
  Our Process
</span>




            <p className="text-muted-foreground text-lg mt-6">
              A proven process that ensures quality, efficiency, and alignment 
              with your business objectives.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Connector Line (Desktop Only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-primary/40 via-primary/10 to-transparent -z-0 translate-x-8" />
                  )}

                  <div className="relative z-10 flex flex-col items-start lg:items-center lg:text-center">
                    {/* Step Number Background Watermark */}
                    <span className="absolute -top-10 lg:left-1/2 lg:-translate-x-1/2 text-8xl font-black text-primary/[0.05] select-none pointer-events-none">
                      {step.step}
                    </span>

                    {/* Icon Container */}
                    <div className="relative mb-6 p-4 rounded-2xl bg-primary/10 border border-primary/20 transition-transform group-hover:scale-110 duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                      {/* Small Mobile Step Bubble */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center lg:hidden">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-[260px] lg:mx-auto">
                        {step.description}
                      </p>
                    </div>
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