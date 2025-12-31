import { motion } from "framer-motion";
import { Code2, Layers } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="full-section relative" id="about">
      <div className="section-container w-full">

        {/* Big Centered Section Title */}
<div className="text-center mb-16">
  <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-primary tracking-wide">
    About Us
  </h1>
</div>




        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              SkyKin Technologies PLC is a forward-looking technology company
              committed to accelerating Ethiopia’s digital transformation
              through innovation and collaboration.
            </p>
            <p>
              By partnering with global technology providers and local
              stakeholders, we deliver advanced digital solutions that empower
              industries, enhance customer experiences, and drive sustainable
              growth across key sectors.
            </p>
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
                    Innovation & Technology
                  </h3>
                  <p className="text-muted-foreground">
                    We leverage modern technologies and global partnerships to
                    deliver scalable, secure, and future-ready digital
                    solutions.
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
                    Industry Impact
                  </h3>
                  <p className="text-muted-foreground">
                    Our solutions support key sectors including
                    telecommunications, agriculture, health, finance, tourism,
                    and hospitality.
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
