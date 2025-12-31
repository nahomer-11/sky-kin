import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/* =========================
   HERO SECTION
========================= */
const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />

      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-[1.1] tracking-tighter"
          >
            We Build Digital Products
            <br />
            <span className="text-gradient">That Feel Effortless</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <Button
              size="lg"
              className="group relative h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2 font-semibold">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-full border-border bg-background/50 backdrop-blur-md font-semibold"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};



/* =========================
   PAGE EXPORT
========================= */
const HomePage = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default HomePage;
