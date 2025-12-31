import { motion } from "framer-motion";
import { Code2, Layers } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="full-section relative" id="about">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight">
              A Software Studio Focused on
              <span className="text-gradient"> Quality & Experience</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                At SkyKin Technology, we design and build digital products that balance 
                performance, usability, and aesthetics.
              </p>
              <p>
                From concept to deployment, we focus on delivering intuitive experiences 
                that solve real problems and drive business growth.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Visual Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border card-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-heading mb-2">
                    Technical Excellence
                  </h3>
                  <p className="text-muted-foreground">
                    We write clean, maintainable code that scales with your business 
                    and stands the test of time.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border card-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-heading mb-2">
                    Design-Driven
                  </h3>
                  <p className="text-muted-foreground">
                    Every pixel matters. We craft interfaces that are not just functional 
                    but genuinely delightful to use.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
